import express from "express";
import requestController from "../controllers/requestController.js";
import { authMiddleware } from "../middlewares/auth.js";

const router = express.Router();

router.post("/swap", authMiddleware, requestController.requestSwap);
router.post("/redeem", authMiddleware, requestController.redeemItem);

export default router;
