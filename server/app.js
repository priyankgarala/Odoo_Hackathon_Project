import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import requestRoutes from "./src/routes/requestRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";
import connectDB from "./src/config/mongo.config.js";
import itemRoutes from "./src/routes/itemRoutes.js";
import cors from 'cors';
dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials : true
}))

app.use(express.json());
app.use(cookieParser());



// Routes
app.use("/api/auth", authRoutes);
app.use("/api/items", itemRoutes);
app.use("/api/requests", requestRoutes);

app.listen(5000, () => {
    connectDB();
    console.log('App running on http://localhost:5000');
})
