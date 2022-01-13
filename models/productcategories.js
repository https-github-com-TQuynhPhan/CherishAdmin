const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductCategorySchema = new Schema({
  CategoryID: { type: String, unique: true },
  CategoryName: String
},
{collection: "productcategories"}
);

module.exports = mongoose.model("productcategories", ProductCategorySchema);