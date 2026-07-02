import express from 'express';
import { generateVideoScript } from '../engines/videoEngine.js';

const router = express.Router();

router.post('/generate', (req, res) => {
  try {
    const videoScript = generateVideoScript(req.body);
    res.json({ success: true, videoScript });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
