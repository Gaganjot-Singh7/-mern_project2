import dotenv from "dotenv";
dotenv.config();
import express from "express";
import router from "./router/router.js";
const app = express();
import Db from "./db/conn.js";

import cors from "cors";


import adminRouter from "./router/admin_router.js"
//cors 
const setCors={
    origin:"http://localhost:5173"
}
app.use(cors(setCors))

//json middleware
app.use(express.json());

//middleware of router 
app.use("/v1", router);

app.use("/v2",adminRouter);


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

