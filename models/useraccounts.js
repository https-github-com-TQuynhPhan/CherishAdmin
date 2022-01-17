const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserAccountSchema = new Schema({
  Account: { type: String, unique: true },
  Password: String,
  Status: {type: String,sparse:true}
},
{collection: "useraccounts"}
);

module.exports = mongoose.model("useraccounts", UserAccountSchema);