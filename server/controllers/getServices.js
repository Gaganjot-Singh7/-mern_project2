import { Service } from "../db/models/servicesSchema.js";

const getServices=async(req,res)=>{
const service=await Service.find();
if(!service){
    res.status(400).send("Not geting data of services in backend ")
}
res.status(200).send(service)
}

export default getServices;