const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductBrandSchema = new Schema({
  BrandID: { type: String, unique: true },
  BrandName: String
},
{collection: "productbrands"}
);

module.exports = mongoose.model("productbrands", ProductBrandSchema);