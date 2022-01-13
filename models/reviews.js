const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  ReviewID: { type: String, unique: true },
  Name: String,
  ProductID: String,
  CommentDay: Date,
  Detail: String,
  Rate: Number
},
{collection: "reviews"}
);

module.exports = mongoose.model("reviews", ReviewSchema);