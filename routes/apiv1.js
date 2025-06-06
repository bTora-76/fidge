const express = require("express");
const router = express.Router();

router.use(express.json());

const userMW = require("./user");
router.use("/user", userMW);

const itemMW = require("./item");
router.use("/item", itemMW);

module.exports = router;
