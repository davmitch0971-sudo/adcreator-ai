const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    passwordHash: { type: String, required: true },
    plan: { type: String, default: "pro-5.99" },
    usageLimit: { type: Number, default: 100 },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", UserSchema);