
import { Service } from "../db/models/servicesSchema.js"

const service_controller=async(req,res)=>{

try {
    let lists=await Service.find()
console.log(lists);

if(lists){
    console.log("backend",lists);
    res.status(200).json({msg:lists})
}
else{
    console.log("Backend error");
    res.send(400).json({msg:"error"})
}

} catch (error) {
    console.log("error",error);
}

}

export default service_controller;