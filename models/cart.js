const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  CartID: { type: String, unique: true },
  CartItem: [String],
  Status: String,
  UserID: String
},
{collection: "carts"}
);

module.exports = mongoose.model("carts", CartSchema);