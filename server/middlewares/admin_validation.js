import user from "../db/models/userSchema.js";
import jwt from "jsonwebtoken";

const admin_middleware = async (req, res, next) => {
    try {
        const header = req.header("authorization");
    console.log("Admin Log Token is  from admin md 1", header);

    if (!header) {
        throw new Error("no token in backend admin middleware")
    }
    const token = header.replace("Bearer", "").trim();
    console.log("after trim we get token as", token);
    const verification_token = jwt.verify(token, "GAGANJOTSINGH")
    if (!verification_token) {
        throw new Error("Error in jwt verification of admin token after verification with key ")
    }
    const { email } = verification_token;
    const dbverification = await user.findOne({ email:email });
    if (!dbverification) {
        throw new Error("You are not athorize ")
    }
    console.log("you are valid Authorize md 1",dbverification._id);
    req.user=dbverification;
    next();
    } catch (error) {
        console.log("middleware1 ",error);
        res.status(400).send("Invalid")
    }
}


export default admin_middleware;