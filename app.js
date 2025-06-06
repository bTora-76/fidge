import express from "express";
const app = express();

//use json
app.use(express.json());

//path mw
import apiv1MW from "./routes/apiv1.js";
app.use("/apiv1", apiv1MW);

import errMW from "./middleware/errorMW.js";
app.use(errMW);

//not found mw
// const notFoundMW = require("./middleware/notfoundMW.js");
// app.use(notFoundMW);

//start
import pool from "./db/databasev1.js";

const start = async () => {
  try {
    // get db connection
    const connection = await pool.getConnection();
    await connection.query("SELECT 1"); // just ask to return 1 to see if the db is actually working
    console.log("DB connection: success");
    connection.release();

    // get the server up
    app.listen(3000, () => {
      console.log("Server is listening on port 3000");
    });
  } catch (err) {
    console.log(`ERROR: ${err}`);
  }
};

start();
