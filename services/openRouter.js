import { Readable } from 'stream';
import logger from '../config/logger.js';

export async function streamOpenRouterCompletion(prompt, model, res) {
    const targetModel = model || 'openai/gpt-4o-mini';
    const apiKey = process.env.OPENROUTER_API_KEY;

    if (!apiKey) {
        throw new Error('CRITICAL_SECURITY_FAULT: OPENROUTER_API_KEY is undefined in runtime environment.');
    }

    logger.info(`[OpenRouterService] Initiating stream | Model: ${targetModel}`);

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'HTTP-Referer': process.env.SITE_URL || 'https://adcreator-ai.enterprise.io',
            'X-Title': 'AdCreator AI Elite Intelligence Matrix',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: targetModel,
            messages: [{ role: 'user', content: prompt }],
            stream: true
        })
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Upstream integration fault: ${response.status} | Payload: ${constText}`);
    }

    // Set high-end SSE headers
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('X-Accel-Buffering', 'no'); 

    // Transform Web Stream ReadableStream to Node.js Stream
    const nodeStream = Readable.fromWeb(response.body);
    nodeStream.pipe(res);

    nodeStream.on('error', (err) => {
        logger.error(`[StreamPipeError] Pipeline disruption: ${err.message}`);
        if (!res.headersSent) {
            res.status(500).json({ error: 'Data stream broken during LLM execution.' });
        }
    });
}
