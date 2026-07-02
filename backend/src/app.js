require("dotenv").config();   // <-- LOAD .env FIRST

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Auth routes
app.use("/auth", require("./routes/authRoutes"));

module.exports = app;