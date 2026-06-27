import jwt from "jsonwebtoken";
import { readDB } from "../utils/db.mjs";
export function auth(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "No token" });
  try {
    const decoded = jwt.verify(token, "SECRET_KEY");
    const db = readDB();
    const user = db.users.find((u) => u.id === decoded.id);
    if (!user) return res.status(401).json({ error: "Invalid user" });
    req.user = user;
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
}
