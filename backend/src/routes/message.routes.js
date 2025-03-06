import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  getUsersFromSidebar,
  getMessages,
  sendMessage,
} from "../controllers/message.controller.js";

const router = express.Router();

router.get("/users", protectRoute, getUsersFromSidebar);

router.get("/users/:id", protectRoute, getMessages);

router.post("/users/:id", protectRoute, sendMessage);

export default router;
