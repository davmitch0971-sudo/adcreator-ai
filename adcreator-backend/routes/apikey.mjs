import express from "express";
import { readDB, writeDB } from "../utils/db.mjs";
import { generateApiKey } from "../utils/crypto.mjs";
const router = express.Router();
router.get("/", (req, res) => {
  res.json({ apiKey: req.user.apiKey });
});
router.post("/regenerate", (req, res) => {
  const db = readDB();
  const user = db.users.find((u) => u.id === req.user.id);
  user.apiKey = generateApiKey();
  writeDB(db);
  res.json({ apiKey: user.apiKey });
});
router.delete("/", (req, res) => {
  const db = readDB();
  const user = db.users.find((u) => u.id === req.user.id);
  user.apiKey = "";
  writeDB(db);
  res.json({ success: true });
});
export default router;
