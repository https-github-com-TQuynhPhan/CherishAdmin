const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  OrderID: { type: String, unique: true },
  UserID: String,
  CartID: String,
  OrderDay: Date,
  TotalCost: Number,
  PaymentStatus: String
},
{collection: "orders"}
);

module.exports = mongoose.model("orders", OrderSchema);