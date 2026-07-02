import express from 'express';
import { generateTemplate } from '../engines/templateEngine.js';

const router = express.Router();

router.post('/generate', (req, res) => {
  try {
    const template = generateTemplate(req.body);
    res.json({ success: true, template });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
