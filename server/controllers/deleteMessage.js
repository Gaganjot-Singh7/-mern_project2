import contact from "../db/models/contactSchema.js";


const deleteMessage=async(req,res)=>{
const id=req.params.id;
const remove=await contact.deleteOne({_id:id});
if(!remove){
    res.status(400).send("Error in delete js ")
}
else{
    res.status(200).send( "deleted js ")
}

}

export default deleteMessage;