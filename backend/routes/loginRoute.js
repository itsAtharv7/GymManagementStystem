import express from "express";
import signup from "../controller/singup.js";
import login from "../controller/login.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

export default router;