import express from "express";
import { PLANS } from "../utils/plans.mjs";
const router = express.Router();
router.get("/", (req, res) => {
  const plan = PLANS[req.user.plan];
  res.json({
    plan: req.user.plan,
    usageToday: req.user.usageToday,
    dailyLimit: plan.dailyLimit
  });
});
export default router;
