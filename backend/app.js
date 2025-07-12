import express from "express";
import api from "./routes/api.js"

//connection pool
import connPool from "./middleware/connectDB.js";

const app = express();

app.use(express.json())
app.use("/api", api)


// ensure that the db is connected before starting server 
const startServer = async ()=>{

  try{
    await connPool.query("SELECT 1"); // test
    console.log("Pool Connected");

     app.listen(3000, () => {
      console.log("Server is up on port 3000...");
    });


  }catch(err){
    console.error(err);
  }
}

startServer();