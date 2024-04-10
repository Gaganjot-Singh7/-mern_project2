import express from "express";
import router from "./router/router.js";
const app=express();

//middleware of router 
app.use("/v1",router);


//port initialize
const port=8000;

app.listen(port,()=>{
    console.log("server is running in port",port)
})