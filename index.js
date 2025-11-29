// index.js (root folder mein)

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/database/connectDB.js";
import developerRoutes from "./src/routes/developerRoutes.js";
import projectRoutes from "./src/routes/projectRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// All developer routes
app.use("/api", developerRoutes);
app.use("/api", projectRoutes);

// Home route
app.get("/", (req, res) => {
  res.json({ message: "Backend is running smoothly!" });
});

// 404 for unknown routes
// app.use("*", (req, res) => {
//   res.status(404).json({ success: false, message: "Route not found" });
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
