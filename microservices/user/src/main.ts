import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PORT } from "./config";

dotenv.config();

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
