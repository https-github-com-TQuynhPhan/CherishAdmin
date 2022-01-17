const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserInfoSchema = new Schema({
  UserID: { type: String, unique: true },
  Account: { type: String, unique: true},
  Name: {type: String, sparse:true },
  Gender: {type: String, sparse:true },
  DOB: {type: String, sparse:true },
  Address: {type: String, sparse:true },
  Email: {type: String, sparse:true},
  Phone: {type: String, sparse:true },
  Role: String
},
{collection: "userinfos"}
);

module.exports = mongoose.model("userinfos", UserInfoSchema);