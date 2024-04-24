
import contact from "../db/models/contactSchema.js"

const admin_contact_controller=async(req,res)=>{
    try {
        const contacts=contact.find();
        if(contacts){
            res.status(200).json({message:contacts})
        }


    } catch (error) {
        res.status(400),json({message:error})
    }

}

export default admin_contact_controller;