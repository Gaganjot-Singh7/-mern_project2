import user from "../db/models/userSchema.js"; 
 
 
 async function admin_delete (req,res){
try {
    const id=req.params.id;
    console.log("id is",id);
    const query=await user.deleteOne({_id:id});
    if(!query){
        console.log("Error in query");
        throw new Error("Error in query");
    }
    console.log("query after ",query);
    res.status(200).send("user deleted sucess")
} catch (error) {
    console.log("delete back error",error);
    res.status(400).send("ERROR IN BACKend")
}
}

export default admin_delete;