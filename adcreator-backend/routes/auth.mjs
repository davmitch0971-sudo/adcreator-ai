import express from "express";
import { readDB, writeDB } from "../utils/db.mjs";
import { hashPassword, checkPassword, createToken } from "../utils/crypto.mjs";
import { v4 as uuid } from "uuid";
const router = express.Router();
router.post("/signup", (req, res) => {
  const { email, password } = req.body;
  const db = readDB();
  if (db.users.find((u) => u.email === email))
    return res.status(400).json({ error: "Email exists" });
  const user = {
    id: uuid(),
    email,
    passwordHash: hashPassword(password),
    plan: "Free",
    apiKey: "",
    usageToday: 0,
    usageResetAt: "",
    createdAt: Date.now()
  };
  db.users.push(user);
  writeDB(db);
  res.json({ token: createToken(user) });
});
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const db = readDB();
  const user = db.users.find((u) => u.email === email);
  if (!user) return res.status(400).json({ error: "Invalid credentials" });
  if (!checkPassword(password, user.passwordHash))
    return res.status(400).json({ error: "Invalid credentials" });
  res.json({ token: createToken(user) });
});
export default router;
