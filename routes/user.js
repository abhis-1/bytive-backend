import express from "express";
import { login, logout, register } from "../controllers/user.js";
const router = express.Router();

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/logout").get(logout);

export default router;