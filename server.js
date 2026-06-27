const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'adcreator-backend')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'adcreator-backend', 'index.html'));
});

app.post('/api/generate', async (req, res) => {
    try {
        const payload = req.body || {};
        res.json({
            status: "success",
            message: "Ad package generated successfully",
            data: payload
        });
    } catch (err) {
        res.status(500).json({ error: "Failed to generate ad variants." });
    }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`AdCreator backend running on port ${PORT}`);
});
