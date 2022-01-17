var express = require('express');
var router = express.Router();

const customersController = require('./customersController');

router.get('/', customersController.list);

router.get('/customersDetail/:Account',customersController.detail);

router.get('/customersLock/:Account',customersController.lock);

module.exports = router;