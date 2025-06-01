const express = require("express")
require("dotenv").config()
const connectDB = require("./db/connect")

const app = express()

//mw
const apiv1MW = require("./routes/apiv1")

app.get("/apiv1",apiv1MW);

const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URL);
        app.listen(3000, ()=>{
            console.log("Connected Successfully!")
        })
    }
    catch(err){
        console.error(err)
    }
}


start();