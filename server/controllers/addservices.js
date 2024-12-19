
import { Service } from "../db/models/servicesSchema.js"
const addservices=async(req,res)=>{


try {

console.log("from add services js ");

    const {title,description,price}=req.body;
if(title && description && price){

    const newService=await Service.create({title,description,price})
    if (!newService){
        res.status(400).send("new service process denied")
    }
    res.status(200).send("added")
}else{
    res.status(400).send("Field not filed properly")
}
} catch (error) {
    console.log(error);
    res.status(400).send("Error in new creating services");
}


}

export default addservices;