
import contact from "../db/models/contactSchema.js"

const admin_contact_controller=async(req,res)=>{
    try {
        const contacts=await contact.find();
        if(contacts){
            res.status(200).json(contacts)
        }


    } catch (error) {
        res.status(400).send(error)
    }

}

export default admin_contact_controller;