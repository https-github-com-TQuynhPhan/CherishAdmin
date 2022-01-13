const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserInfoSchema = new Schema({
  UserID: { type: String, unique: true },
  Account: { type: String, unique: true},
  Name: String,
  Gender: String,
  DOB: String,
  Address: String,
  Email: String,
  Phone: String,
  Role: String
},
{collection: "userinfos"}
);

module.exports = mongoose.model("userinfos", UserInfoSchema);