const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/jwt");

exports.register = async (req, res) => {
    const { email, password } = req.body;

    const existing = await User.findOne({ email });
    if (existing) {
        return res.status(400).json({ error: "Email already exists" });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await User.create({
        email,
        passwordHash
    });

    const token = generateToken(user._id);

    res.json({
        success: true,
        user: { id: user._id, email: user.email },
        token
    });
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ error: "Invalid email or password" });
    }

    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) {
        return res.status(400).json({ error: "Invalid email or password" });
    }

    const token = generateToken(user._id);

    res.json({
        success: true,
        user: { id: user._id, email: user.email },
        token
    });
};

exports.me = async (req, res) => {
    const user = await User.findById(req.userId).select("-passwordHash");
    res.json({ success: true, user });
};