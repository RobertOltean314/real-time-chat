import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  getUsersFromSidebar,
  getMessages,
  sendMessage,
} from "../controllers/message.controller.js";

const router = express.Router();

router.get("/user", protectRoute, getUsersFromSidebar);

router.get("/user/:id", protectRoute, getMessages);

router.post("/user/:id", protectRoute, sendMessage);

export default router;
