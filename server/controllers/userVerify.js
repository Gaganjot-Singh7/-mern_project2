const userVerify = async(req, res) => {

    try {

        const data  = req.user;
        
     console.log(data);
    res.status(200).json({message:data})

    } catch (error) {
        console.log("error in userVerify after middleware", error);
        res.status(400).json({message :error})
    }
}

export default userVerify;