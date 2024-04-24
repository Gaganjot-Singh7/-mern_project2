import express from "express"
const router=express.Router()
import admin_user_controller from "../controllers/admin_user_controller.js"



router.route("/user").get(admin_user_controller);
router.route("/contact").get(admin_contact_controller)


export default router;