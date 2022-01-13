const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  ProductID: { type: String, unique: true },
  ProductName: String,
  Category: String,
  BrandID: String,
  ProducingYear: Number,
  Color: String,
  Weight: Number,
  Count: Number,
  Price: Number,
  SalePrice: Number,
  Description: String,
  Image: String
},
{collection: "products"}
);

module.exports = mongoose.model("products", ProductSchema);