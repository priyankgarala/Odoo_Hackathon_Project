import express from "express";
import multer from "multer";
import itemController from "../controllers/itemController.js";

import {authMiddleware} from "../middlewares/auth.js";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/", authMiddleware, upload.array("images", 5), itemController.createItemController);
router.get("/:id", authMiddleware , itemController.getItemDetails);
router.get("/", itemController.listItems);



export default router;
