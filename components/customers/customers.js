var express = require('express');
var router = express.Router();

const customersController = require('./customersController');

router.get('/', customersController.list);

router.get('/customersEdit',customersController.edit);

module.exports = router;