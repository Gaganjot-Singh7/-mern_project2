import { Router } from "express";
import register from "../controllers/index.js"
import login from "../controllers/login_controller.js";
import contact_controller from "../controllers/contact_controller.js";
import getRegister from "../controllers/getRegister.js";

const router=Router();
//register
router.route("/register").post(register).get(getRegister);

//login
router.route("/login").post(login);


router.route("/contact").post(contact_controller)

export default router;