const express = require("express");
const router = express.Router();
import mysql from "mysql2/promise";

// import model
const userModel = require("../model/User");

// router.get("/", (req,res)=>{

// });

router.use(express.json());

router.post("/", async (req, res) => {
  const newItem = await userModel.create(req.body);
  res.status(201).send(newItem);
});

module.exports = router;
