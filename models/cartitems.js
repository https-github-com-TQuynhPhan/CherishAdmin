const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartItemSchema = new Schema({
  CartItemID: { type: String, unique: true },
  ProductID: String,
  ProductName: String,
  Count: Number,
  Price: Number,
  Total: Number,
  ItemAddDay: Date
},
{collection: "cartitems"}
);

module.exports = mongoose.model("cartitems", CartItemSchema);