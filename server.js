import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { body, validationResult } from 'express-validator';
import fs from 'fs';

import logger from './config/logger.js';
import { streamOpenRouterCompletion } from './services/openRouter.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure log directory exists
const logDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const app = express();
const PORT = process.env.PORT || 3000;

// --- SECURITY HARDENING ---
app.set('trust proxy', 1);
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
            fontSrc: ["'self'", "https://fonts.gstatic.com"],
            connectSrc: ["'self'", "https://openrouter.ai"]
        }
    }
}));

app.use(cors({
    origin: process.env.CLIENT_ORIGIN || '*',
    methods: ['POST', 'GET'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json({ limit: '25mb' }));

// --- EXPLICIT STATIC ASSET ROUTING ---
const publicDir = path.join(__dirname, 'public');
app.use(express.static(publicDir));

// Explicit fallback route to guarantee index.html loads assets cleanly
app.get('/', (req, res) => {
    res.sendFile(path.join(publicDir, 'index.html'));
});

// --- RATE-LIMITING ENGINE ---
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 250,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: 'Rate-ceiling penetrated. Gateway locked for cooldown.' }
});

app.use('/api/', apiLimiter);

// --- STREAMING PIPELINE ENTRYPOINT ---
app.post('/api/generate', [
    body('prompt').isString().trim().isLength({ min: 1, max: 15000 }).withMessage('Payload matrix out of bounds.'),
    body('model').optional().isString()
], async (req, res) => {
    
    const validatorErrors = validationResult(req);
    if (!validatorErrors.isEmpty()) {
        logger.warn(`[PayloadValidationRefused] Unsafe/malformed payload from IP: ${req.ip}`);
        return res.status(400).json({ errors: validatorErrors.array() });
    }

    const { prompt, model } = req.body;
    logger.info(`[SourceIntelligence-Engine] Processing invocation sequence for IP: ${req.ip}`);

    try {
        await streamOpenRouterCompletion(prompt, model, res);
    } catch (err) {
        logger.error(`[EngineGateFailure] Trace: ${err.stack}`);
        if (!res.headersSent) {
            res.status(500).json({ error: "Elite calculation pipeline faulted." });
        }
    }
});

// --- TELEMETRY ---
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'nominal',
        uptime: process.uptime(),
        memoryUsage: process.memoryUsage()
    });
});

// --- BIND SERVER NODE ---
const server = app.listen(PORT, () => {
    logger.info(`[SourceIntelligence-Node-Core] Gateway active | Port: ${PORT}`);
});

// --- GRACEFUL SHUTDOWNS ---
const processTeardown = (signal) => {
    logger.warn(`[SystemTermination] Kill instruction (${signal}) received. Initiating unbind sequence...`);
    
    const timeout = setTimeout(() => {
        logger.error('[SystemTermination] Unbind deadline exceeded. Hard killing thread.');
        process.exit(1);
    }, 10000);

    server.close(() => {
        logger.info('[SystemTermination] Gateway sockets systematically unlinked. Exiting.');
        clearTimeout(timeout);
        process.exit(0);
    });
};

process.on('SIGTERM', () => processTeardown('SIGTERM'));
process.on('SIGINT', () => processTeardown('SIGINT'));
process.on('unhandledRejection', (reason) => {
    logger.error(`[FatalExceptionTrap] Unhandled promise rejection: ${reason.stack || reason}`);
});
process.on('uncaughtException', (err) => {
    logger.error(`[FatalExceptionTrap] Uncaught contextual corruption: ${err.stack}`);
    processTeardown('UNCAUGHT_EXCEPTION');
});

