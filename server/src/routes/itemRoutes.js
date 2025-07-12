import express from "express";
import multer from "multer";
import createItemController from "../controllers/itemController.js";
import {authMiddleware} from "../middlewares/auth.js";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/", authMiddleware, upload.array("images", 5), createItemController);

export default router;
