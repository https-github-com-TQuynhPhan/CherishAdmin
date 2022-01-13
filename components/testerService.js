var express = require("express");
const async = require("hbs/lib/async");
var router = express.Router();

var useraccount = require('../models/useraccounts')

router.get("/", async function (req, res) {
    
   let data=  await  useraccount.find();
   console.log(data);
    res.send(data);

});

module.exports = router;