import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PORT } from "./config";
import App from "./express-app";

dotenv.config();

const StartServer = async () => {
  const app = express();

  await App(app);

  app.use(cors());

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

StartServer();
