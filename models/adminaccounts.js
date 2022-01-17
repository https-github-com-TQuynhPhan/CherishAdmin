const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminAccountSchema = new Schema({
  Account: { type: String, unique: true },
  Status: {type: String,sparse:true},
  Password: String
},
{collection: "adminaccounts"}
);

module.exports = mongoose.model("adminaccounts", AdminAccountSchema);