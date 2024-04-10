import { Router } from "express";

const router=Router();

router.route("/register").get((req,res)=>{
    res.send("welcome in register ")
})


export default router;