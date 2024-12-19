import contact from "../db/models/contactSchema.js"
const contact_controller = async (req, res) => {
    try {
        const { username, email, message } = req.body;
        console.log(req.body);


        //condition on req.body
        if (username && email && message) {
           const contact_save=await contact.create({ username, email, message })
           if(!contact_save){
            return res.status(400).json({message:"Data not stored ERRRRRRR!!!"})
           }
           return res.status(200).json({message:"DATA SAvEd !!!!! check "})
        }
        else {
            return res.status(400).json({ message: "enter all detail" })
        }
    } catch (error) {

    }
}
export default contact_controller;