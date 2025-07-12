import express from "express";
const router = express.Router();
import authController from "../controllers/authController.js";

router.post("/register", authController.register_user);
router.post("/login", authController.login_user);
router.get("/logout", authController.logout_user);

export default router;

