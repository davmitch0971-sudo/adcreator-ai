import { readDB, writeDB } from "../utils/db.mjs";
import { PLANS } from "../utils/plans.mjs";
export function enforceUsage(req, res, next) {
  const db = readDB();
  const user = db.users.find((u) => u.id === req.user.id);
  const plan = PLANS[user.plan];
  const today = new Date().toDateString();
  if (user.usageResetAt !== today) {
    user.usageToday = 0;
    user.usageResetAt = today;
    writeDB(db);
  }
  if (user.usageToday >= plan.dailyLimit) {
    return res.status(403).json({ error: "Daily limit reached" });
  }
  user.usageToday++;
  writeDB(db);
  next();
}
