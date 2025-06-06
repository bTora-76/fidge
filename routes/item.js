const express = require("express");
const router = express.Router();

const itemModel = require("../model/Item");

router.post("/", async (req, res) => {
  const newItem = await itemModel.create(req.body);
  res.json(newItem);
});

module.exports = router;
