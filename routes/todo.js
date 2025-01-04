import express from "express";
import {
  createTodo,
  deleteTodoById,
  getTodo,
  getTodoById,
  updateTodoById,
} from "../controllers/todo.js";
import { isAuth } from "../middlewares/isAuth.js";
const router = express.Router();

router.route("/").get(isAuth, getTodo);
router.route("/").post(isAuth, createTodo);
router.route("/:todoId").get(isAuth, getTodoById);
router.route("/:todoId").put(isAuth, updateTodoById);
router.route("/:todoId").delete(isAuth, deleteTodoById);

export default router;
