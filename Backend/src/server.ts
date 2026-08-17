import "dotenv/config";

import express from "express";
import cors from "cors";

import contactRoutes from "./routes/contact.routes";

console.log("API key exists:", !!process.env.RESEND_API_KEY);

const app = express();

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
  })
);

app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({
    success: true,
    message: "Earthkeepers API is running.",
  });
});

app.use("/api/contact", contactRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
