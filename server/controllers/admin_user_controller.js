import user from "../db/models/userSchema.js";

const admin_user_controller = async (req, res) => {

    try {
        const users = await user.find().select({ password: 0 })
        if (users) {
            console.log("backend user admin ",users);
            res.status(200).json(users)
        }

    } catch (error) {
        res.status(400).error(error)
    }
}


export default admin_user_controller;