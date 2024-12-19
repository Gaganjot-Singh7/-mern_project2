import { Router } from "express";
import register from "../controllers/index.js"
import login from "../controllers/login_controller.js";
import contact_controller from "../controllers/contact_controller.js";
import getRegister from "../controllers/getRegister.js";
import userVerify from "../controllers/userVerify.js";
import verification_middleware from "../middlewares/verification_middleware.js";
import services_controller from "../controllers/service_controller.js"
const router=Router();
//register
router.route("/register").post(register).get(getRegister);

//login
router.route("/login").post(login);


router.route("/contact").post(contact_controller)


router.route("/userVerify").get(verification_middleware,userVerify);


router.route("/services").get(services_controller)

export default router;