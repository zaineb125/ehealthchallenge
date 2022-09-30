import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import morgan from "morgan";
import productRoute from "./routes/productRoute.js";
import reclamationRoute from "./routes/reclamationRoute.js";
import cors from "cors";

dotenv.config();

connectDB();

const app = express();

app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running ...");
});

app.use("/api/products", productRoute);
app.use("/api/reclamations", reclamationRoute);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
