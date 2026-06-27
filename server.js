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

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log('AdCreator backend running on port ' + PORT);
});
