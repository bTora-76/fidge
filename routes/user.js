const express = require("express");
const router = express.Router();

// import model
const userModel = require("../model/User")

// router.get("/", (req,res)=>{

// });

router.use(express.json());

router.post("/", async (req,res)=>{
    const user = await userModel.create(req.body);
    res.status(201).send(user)
});

export default router;