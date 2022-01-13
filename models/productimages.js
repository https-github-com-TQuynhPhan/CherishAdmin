const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductImageSchema = new Schema({
  ProductID: { type: String, unique: true },
  ProductImage: [String]
},
{collection: "productimages"}
);

module.exports = mongoose.model("productimages", ProductImageSchema);