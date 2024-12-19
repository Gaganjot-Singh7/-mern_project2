import express from "express"
const router=express.Router()
import admin_user_controller from "../controllers/admin_user_controller.js"
import admin_contact_controller from "../controllers/admin_contact_controller.js";
import admin_middleware from "../middlewares/admin_validation.js";
import admin_isadmin from "../middlewares/admin_isadmin.js";
import admin_delete from "../controllers/admin_delete.js";
import addservices from "../controllers/addservices.js";
import getServices from "../controllers/getServices.js";
import deleteServices from "../controllers/deleteServices.js";
import deleteMessage from "../controllers/deleteMessage.js";

router.route("/user").get(admin_middleware,admin_isadmin,admin_user_controller);
router.route("/contact").get(admin_middleware,admin_isadmin,admin_contact_controller);
router.route("/delete/:id").delete(admin_middleware,admin_isadmin,admin_delete);
router.route("/addservices").post(admin_middleware,admin_isadmin,addservices);
router.route("/services").get(admin_middleware,admin_isadmin,getServices);
router.route("/deleteService/:id").delete(admin_middleware,admin_isadmin,deleteServices);
router.route("/deleteMessage/:id").delete(admin_middleware,admin_isadmin,deleteMessage)



export default router;