import user from "../db/models/userSchema.js";
import bcrypt from "bcrypt"



const login =async(req,res)=>{
try {
    const {email,password}=req.body;   
    console.log(req.body);
    if(email && password){
       const userExist= await user.findOne({email})
       if(!userExist){return res.status(400).json({message:"INVALID CREDENTIALS"})}
       const verified=await bcrypt.compare(password,userExist.password)
       if(!verified){return res.status(404).json({message:"INVALID PASSWORD"})}
       res.status(200).json({message:"LOGIN SUCESS",_id:userExist._id.toString(),token:await userExist.getToken()})
    }
    else{
        console.log("data is not sent accurately please check");
        return res.status(500).json({message:"Enter all details"})
    }
} catch (error) {
    console.log(error)
    res.status(500).send("ERROR IN LOGIN ")
}}


export default login ;