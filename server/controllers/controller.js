const register=async(req,res)=>{
try {
    console.log(req.body);
    res.status(200).json({ message:req.body})
} catch (error) {
    res.send("ERROR in Page").status(400);
}
}


export default register