export function admin(req, res, next) {
  if (req.user.email !== "admin@adcreator.ai")
    return res.status(403).json({ error: "Admin only" });
  next();
}
