const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./db/connect.js");

//use json
app.use(express.json());

//path mw
const apiv1MW = require("./routes/apiv1");
app.use("/apiv1", apiv1MW);

//not found mw
const notFoundMW = require("./middleware/notfoundMW.js");
app.use(notFoundMW);

//start
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(3000, () => {
      console.log("Connected Successfully!");
    });
  } catch (err) {
    console.error(err);
  }
};

start();
