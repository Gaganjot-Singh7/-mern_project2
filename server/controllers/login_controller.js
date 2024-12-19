import user from "../db/models/userSchema.js";
import bcrypt from "bcrypt"



const login =async(req,res)=>{
try {
    const {email,password}=req.body;   
    console.log("Login details enterd",req.body);
    if(email && password){
       const userExist= await user.findOne({email})
       if(!userExist){
        console.log("from backend user not existed plese check may not email registered");
        return res.status(400).json({message:"INVALID CREDENTIALS"})}
       const verified=await bcrypt.compare(password,userExist.password)
       if(!verified){
        console.log(" from backend password error in login ");
        return res.status(404).json({message:"INVALID PASSWORD"})}
       let token=await userExist.getToken();
       console.log(" from backend Login Token of ", userExist.email,"token is ",token);
       res.status(200).json({message:"LOGIN SUCESS",_id:userExist._id.toString(),token:token})
    }
    else{
        console.log("from backend data is not sent accurately please check");
        return res.status(500).json({message:"Enter all details"})
    }
} catch (error) {
    console.log(error)
    res.status(500).send("from backend ERROR IN LOGIN ")
}}


export default login ;