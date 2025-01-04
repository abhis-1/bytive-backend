import express from "express";
import { configDotenv } from "dotenv";
import bodyParser from "body-parser"
import { connectDB } from "./db/database.js";
import userRouter from "./routes/user.js";
import todoRouter from "./routes/todo.js"
import cookieParser from "cookie-parser";
import cors from "cors";

configDotenv();
connectDB();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}))

app.use("/user", userRouter);
app.use("/tasks", todoRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
