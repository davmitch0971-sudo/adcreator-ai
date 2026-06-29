import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

// THIS SCRIPT FIXES THE LAYOUT: Instructs Express to serve style.css and your script assets
app.use(express.static(__dirname));

// API handler endpoint for campaign processing
app.post('/api/ads', (req, res) => {
    const { productName, platform } = req.body;
    if (!productName) {
        return res.status(404).json({ error: "Product name required" });
    }
    
    const creativeCopy = `[AdCreator Pro Narrative]\n\n🔥 Discover ${productName}—precision-engineered to dominate your market on ${platform}.\n\nStop settling for repetitive, generic outcomes. Upgrade your positioning today.`;
    res.json({ copy: creativeCopy });
});

app.listen(PORT, () => {
    console.log(`🚀 AdCreator backend running perfectly on http://192.168.12.175:${PORT}`);
});
