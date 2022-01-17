var express = require('express');
var router = express.Router();

const ordersController = require('./ordersController');

router.get('/', ordersController.list);

router.get('/ordersEdit', ordersController.edit);

module.exports = router;