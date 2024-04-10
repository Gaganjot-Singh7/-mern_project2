//user model
import user from "../db/models/userSchema.js"


const register = async (req, res) => {
    try {
        console.log(req.body);



        //destructuring
        const { username, email, phone, password, isAdmin } = req.body;


        //if else on req
        if (username && email && phone && password && isAdmin) {
            console.log("all fields are carring values ");
            const checkEmail = await user.findOne({ email });

            //check flag on unique email
            if (checkEmail) {
                console.log("Please Enter a valid Email because  it is already regestered")
                res.status(400).json({ message: "Enter a valid email " })
            }

           else{
             //test the email 
             console.log('Email is unique')
             await user.create({ username, email, phone, password, isAdmin })
             return res.json({message:"data submmited go and check !!!"})
           }
        }

        else {
           return  res.status(400).send("Invalid field data please enter all the data")
        }




    } catch (error) {
        console.log(error);
       return res.status(500).json({ message: "error" });
    }
}


export default register