import express from 'express';
import { generateCaption } from '../engines/captionEngine.js';

const router = express.Router();

router.post('/generate', (req, res) => {
  try {
    const caption = generateCaption(req.body);
    res.json({ success: true, caption });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
