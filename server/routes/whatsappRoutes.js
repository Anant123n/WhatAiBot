import express from "express";
import { handleIncomingMessage } from "../controllers/whatsappController.js";

const router = express.Router();

router.post("/", handleIncomingMessage);

export default router;
