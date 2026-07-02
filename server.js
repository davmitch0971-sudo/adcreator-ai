import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ROUTES (correct backend folder path)
import scriptRoutes from './backend/routes/scriptRoutes.js';
import videoRoutes from './backend/routes/videoRoutes.js';
import imageRoutes from './backend/routes/imageRoutes.js';
import templateRoutes from './backend/routes/templateRoutes.js';
import captionRoutes from './backend/routes/captionRoutes.js';
import postingRoutes from './backend/routes/postingRoutes.js';

// ROUTE MOUNTING
app.use('/api/scripts', scriptRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/images', imageRoutes);
app.use('/api/templates', templateRoutes);
app.use('/api/captions', captionRoutes);
app.use('/api/posting', postingRoutes);

// ROOT CHECK
app.get('/', (req, res) => {
  res.json({ message: 'AdCreator-AI Backend Running (ESM Mode)' });
});

// SERVER START
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`AdCreator-AI backend running on port ${PORT} (ESM)`);
});
