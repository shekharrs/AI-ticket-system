import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
})

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected ✅");
        app.listen(PORT, () => console.log(`🚀 app listening on port ${PORT}`))
    })
    .catch((err) => console.error("❌ MongoDB error: ", err))