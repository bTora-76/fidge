import express from "express";
const router = express.Router();

router.use(express.json());

import userMW from "./user.js";
router.use("/user", userMW);

import itemMW from "./item.js";
router.use("/item", itemMW);

export default router;
