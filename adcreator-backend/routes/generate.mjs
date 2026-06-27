import express from "express";
import fetch from "node-fetch";
import { enforceUsage } from "../middleware/usage.mjs";
const router = express.Router();
router.post("/", enforceUsage, async (req, res) => {
  const { prompt } = req.body;
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.OPENAI_API_KEY
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a world-class ad copywriter." },
        { role: "user", content: prompt }
      ]
    })
  });
  const data = await response.json();
  res.json({
    headline: data.choices[0].message.content,
    primaryText: data.choices[0].message.content,
    cta: "Learn More",
    variations: [
      data.choices[0].message.content,
      data.choices[0].message.content,
      data.choices[0].message.content
    ]
  });
});
export default router;
