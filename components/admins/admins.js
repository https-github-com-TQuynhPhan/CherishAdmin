var express = require('express');
var router = express.Router();

const adminsController = require('./adminsController');

router.get('/', adminsController.list);

router.get('/adminsEdit',adminsController.edit);

router.get('/addAdmin',adminsController.add);

router.get('/adminsDetail',adminsController.detail);

module.exports = router;