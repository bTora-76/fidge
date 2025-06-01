const express = require("express")
const router = express.Router();

const userMW = require("./user")


router.get("/user", userMW);