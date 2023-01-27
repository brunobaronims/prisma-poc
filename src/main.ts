import express, { json } from "express";
import dotenv from "dotenv";
dotenv.config();

import { connectDb } from "./config/database";
import { bookRouter } from "./api/routes/bookRouter";
import { userRouter } from "./api/routes/userRouter";

const app = express();
app
  .use(json())
  .use('/books', bookRouter)
  .use('/users', userRouter);


connectDb();

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is up and running on port: ${port}`);
})