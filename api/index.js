import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();

const app = express();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to mongo db");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.listen(3000, () => {
  console.log("server is running");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
