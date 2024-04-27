import { mongoose } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


//mongoose Schema of User
export const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});


userSchema.pre("save", async function (next) {
    const user = this;

    try {

        if (!user.isModified("password")) {
            next();
        }

        const salt = 10;
        const hash_pass = await bcrypt.hash(user.password, salt);
        user.password = hash_pass;
    } catch (error) {
        next(error)
    }

});





//create a instance using user.methods using schema 
userSchema.methods.getToken = async function()  {
    try {
        const token = await jwt.sign({
            user_id: this._id.toString(),
            email: this.email,

        }, "GAGANJOTSINGH", { expiresIn: "50d" })

        if (token) {
            console.log("token generated");
        } else {
            console.log("token generation error");
        } return token;
    } catch (error) {
        console.log("Token genearion error", error);
    }
}



//Model of userSchema
const user = mongoose.model("user", userSchema);

export default user;