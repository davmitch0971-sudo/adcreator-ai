const path = require('path');
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/ads', async (req, res) => {
  try {
    const prompt = req.body.prompt;

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + process.env.OPENROUTER_API_KEY,
        'HTTP-Referer': 'https://render.com',
        'X-Title': 'AdCreator'
      },
      body: JSON.stringify({
        model: 'openai/gpt-4o-mini',
        messages: [
          { role: 'system', content: 'You are a world-class ad copywriter. Write high-converting ad copy.' },
          { role: 'user', content: prompt }
        ]
      })
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Ad generation failed' });
  }
});

app.get("/", (req, res) => {
    res.send("AdCreator Backend is Running");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log('AdCreator backend running on port ' + PORT);
});

// Ad generation logic
app.post('/api/ads', async (req, res) => {
    try {
        const payload = req.body;
        const predictivePrompt = `You are an expert growth marketer and predictive analyst. Given the following campaign details and constraints, produce multiple ad variants (headlines, body, CTA), and for each variant estimate expected performance indicators (CTR, conversion rate, best channel). Provide 3 distinct ad variants optimized for different channels (social, search, display). Output JSON with keys: variants (array). Details: ${JSON.stringify(payload)}`;
        
        // Add your AI call logic here
        res.json({ status: "success", prompt: predictivePrompt });
    } catch (err) {
        res.status(500).json({ error: "Ad generation failed" });
    }
});
