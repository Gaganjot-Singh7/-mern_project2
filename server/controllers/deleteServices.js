
import { Service } from "../db/models/servicesSchema.js";

const deleteServices = async (req, res) => {
    const id = req.params.id;
    console.log("delete Srvices check");
    try {
        const data = await Service.deleteOne({ _id: id });
        if (!data) {
            res.status(400).send("Error in delete js controllers")
        }
        else{
            console.log("deletes services in db and succes! ");
            res.status(200).send("Delete in js services sucessfully")
        }


    } catch (error) {
        console.log("deleteServices in js", error);
        res.status(400).send("Erorr in delete Services in js ")
    }
}

export default deleteServices;