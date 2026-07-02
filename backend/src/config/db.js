const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URL;

        if (!uri) {
            console.error("ERROR: MONGO_URL is missing from .env");
            process.exit(1);
        }

        await mongoose.connect(uri);
        console.log("MongoDB connected");
    } catch (err) {
        console.error("DB connection error:", err.message);
        process.exit(1);
    }
};

module.exports = connectDB;