import { mongoose } from "mongoose";

//mongoose Schema of User
const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
});

//Model of userSchema
const user=mongoose.model("user",userSchema);

export default user;