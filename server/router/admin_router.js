import express from "express"
const router=express.Router()
import admin_user_controller from "../controllers/admin_user_controller.js"
import admin_contact_controller from "../controllers/admin_contact_controller.js";
import admin_middleware from "../middlewares/admin_validation.js";
import admin_isadmin from "../middlewares/admin_isadmin.js";
import admin_delete from "../controllers/admin_delete.js";


router.route("/user").get(admin_middleware,admin_isadmin,admin_user_controller);
router.route("/contact").get(admin_middleware,admin_isadmin,admin_contact_controller);
router.route("/delete/:id").delete(admin_middleware,admin_isadmin,admin_delete);


export default router;