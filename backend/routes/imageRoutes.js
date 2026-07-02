import express from 'express';
import { generateImagePrompt } from '../engines/imageEngine.js';

const router = express.Router();

router.post('/generate', (req, res) => {
  try {
    const imagePrompt = generateImagePrompt(req.body);
    res.json({ success: true, imagePrompt });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
