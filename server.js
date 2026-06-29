import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables from your .env file
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Set up directory paths for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve your index.html and static frontend assets directly from the root folder
app.use(express.static(__dirname));

// The correct, verified endpoint that your script.js talks to
app.post('/api/ads', async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
    }

    try {
        // Direct integration with OpenRouter API
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
                'Content-Type': 'application/json',
                'HTTP-Referer': 'http://localhost:3000', 
                'X-Title': 'AdCreator AI'
            },
            body: JSON.stringify({
                model: 'openai/gpt-4o-mini',
                messages: [
                    { role: 'system', content: 'You are a world-class ad copywriter.' },
                    { role: 'user', content: prompt }
                ]
            })
        });

        const data = await response.json();
        
        if (data.error) {
            console.error('OpenRouter Error Data:', data.error);
            return res.status(500).json({ error: data.error.message });
        }

        // Return the generated text back to your frontend script.js
        res.json({ text: data.choices[0].message.content });

    } catch (err) {
        console.error('Backend Catch Error:', err);
        res.status(500).json({ error: 'Ad generation failed' });
    }
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`AdCreator backend running perfectly on port ${PORT}`);
});

