import "dotenv/config";

import express from "express";
import cors from "cors";

import contactRoutes from "./routes/contact.routes";

console.log("API key exists:", !!process.env.RESEND_API_KEY);

const app = express();

const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://localhost:5173",
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests without an Origin header
      // such as server-to-server requests.
      if (!origin) {
        callback(null, true);
        return;
      }

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error("Not allowed by CORS"));
    },
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

export default app;
