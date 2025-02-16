import { refer } from "../controllers/userController.js";
import express from "express";


const router = express.Router()


router
.post('/refer', refer);

export default router