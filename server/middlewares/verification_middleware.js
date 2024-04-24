import jwt from "jsonwebtoken"
import user from "../db/models/userSchema.js";

const verification_middleware = async (req, res, next) => {
    try {
        let token_verify = req.header("Authorization");
        if (!token_verify) {
            return res.status(400).json({message:"error"})
        }

        console.log("get backend user token from react ", token_verify);
        let token = token_verify.replace("Bearer", "").trim();
        console.log("after trim we get", token);
        let user_data = await jwt.verify(token, "GAGANJOTSINGH");
        if (!user_data) { throw new Error("jwt verification error found") }
console.log(user_data);
        let data = await user.findOne({ email: user_data.email }).select({
            password: 0,
        })
console.log(data);
       req.user=data;
       req.id=user_data._id;
       req.token=token;

        next()

    } catch (error) {
        console.log("backend User error", error);
        res.status(400).json({message :error})
    }


}

export default verification_middleware;