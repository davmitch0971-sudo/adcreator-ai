import express from 'express';
import { generatePostingPlan } from '../engines/postingEngine.js';

const router = express.Router();

router.post('/generate', (req, res) => {
  try {
    const postingPlan = generatePostingPlan(req.body);
    res.json({ success: true, postingPlan });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
