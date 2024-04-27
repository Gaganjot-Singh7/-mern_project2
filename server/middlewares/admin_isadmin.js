const admin_isadmin = async (req, res, next) => {
    try {
        const isadmin = req.user;
        if (!isadmin) {
            throw new Error("middle ware error in admin 2 due to middle ware 1")
        }
       
        const checkAdmin =  isadmin.isAdmin;
        console.log("md2",isadmin,"md 2 admin check",checkAdmin);
        if(!checkAdmin){
            res.status(400).send("you are not admin md2");
            throw new Error("you have not acess md2");
        }
        console.log("your welcome");
        next();
    } catch (error) {
        next(error)
    }
}


export default admin_isadmin;