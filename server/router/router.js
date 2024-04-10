import { Router } from "express";
import register from "../controllers/index.js"
import login from "../controllers/login_controller.js";

const router=Router();
//register
router.route("/register").get(register);

//login
router.route("/login").post(login);

export default router;