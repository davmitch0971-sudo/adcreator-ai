const express = require('express');
const { generateTemplate } = require('../engines/templateEngine');

const router = express.Router();

/**
 * POST /api/templates/generate
 * Generates a full ad template using the Template Engine.
 */
router.post('/generate', (req, res) => {
  try {
    const template = generateTemplate(req.body);
    res.json({
      success: true,
      template,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

module.exports = router;
