const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  itemName: {
    type: String,
    length: 20,
    required: [true, "Item name is required!"],
  },
  bbf: {
    type: Date,
    required: [true, "Best Before Date is required"],
  },
  exp: {
    type: Date,
    required: [true, "Expiration Date is required"],
  },
  comment: {
    type: String,
    length: 500,
  },
});

module.exports = mongoose.model("Item", itemSchema);
