const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

// Serve your styled index.html at the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'adcreator-backend', 'index.html'));
});

// Ad variant predictive generation endpoint
app.post('/api/generate', async (req, res) => {
    try {
        const payload = req.body || {};
        const promptText = payload.prompt || '';
        
        // Predictive response simulating 3 optimized variants (social, search, display)
        const mockResponse = {
            variants: [
                {
                    channel: "Social (e.g., Instagram/Facebook)",
                    headline: "Stop Scrolling & Start Scaling 🚀",
                    body: `Transform your workflow with our predictive ad engine. Built for innovators who demand results, ${promptText} makes scaling effortless.`,
                    cta: "Try It Now",
                    metrics: { ctr: "4.2%", conversionRate: "3.8%" }
                },
                {
                    channel: "Search (Google Ads)",
                    headline: "Optimize Campaigns Instantly",
                    body: `Looking for top-tier growth marketing tools for ${promptText}? Leverage predictive analytics to maximize ROI.`,
                    cta: "Get Started",
                    metrics: { ctr: "6.5%", conversionRate: "4.5%" }
                },
                {
                    channel: "Display Banner",
                    headline: "The Next-Gen Ad Engine",
                    body: `Automate your ad variations for ${promptText} seamlessly. Expert growth marketing made simple.`,
                    cta: "Discover More",
                    metrics: { ctr: "1.8%", conversionRate: "2.1%" }
                }
            ]
        };

        res.json(mockResponse);
    } catch (err) {
        res.status(500).json({ error: "Failed to generate ad variants." });
    }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`AdCreator backend running on port ${PORT}`);
});
