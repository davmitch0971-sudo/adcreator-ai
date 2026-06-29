const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const path = require('path'); // Added to handle file paths correctly

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from the project root
app.use(express.static(__dirname));

// Route to explicitly serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// AI generation endpoint
app.post('/api/ads', async (req, res) => {
    try {
        const { prompt } = req.body;
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + process.env.OPENAI_API_KEY
            },
            body: JSON.stringify({
                model: 'gpt-4o-mini',
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('AdCreator backend running on port ' + PORT);
});

