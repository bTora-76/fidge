import express from "express";
import login from "./login.js"

const router = express.Router();

router.use("/login", login) //make sure to use login.js in here



export default router