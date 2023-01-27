import express, { json } from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectDb } from "./config/database";

const app = express();
app.use(json());
connectDb();

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is up and running on port: ${port}`);
})