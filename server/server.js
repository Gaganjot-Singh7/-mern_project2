import dotenv from "dotenv";
dotenv.config();
import express from "express";
import router from "./router/router.js";
const app = express();
import Db from "./db/conn.js";

//json middleware
app.use(express.json());

//middleware of router 
app.use("/v1", router);




//port initialize
const port = 8000;


Db()
    .then(() => {
        console.log("database connected");
        app.listen(port, () => {
            console.log("server is running in port", port)
        })
    })
    .catch((err) => {
        console.error(err);
    })

