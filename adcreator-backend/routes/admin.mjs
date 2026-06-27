import express from "express";
import { readDB, writeDB } from "../utils/db.mjs";
const router = express.Router();
router.get("/users", (req, res) => {
  const db = readDB();
  res.json(db.users);
});
router.post("/disable", (req, res) => {
  const { userId } = req.body;
  const db = readDB();
  const user = db.users.find((u) => u.id === userId);
  if (!user) return res.status(400).json({ error: "User not found" });
  user.disabled = true;
  writeDB(db);
  res.json({ success: true });
});
export default router;
