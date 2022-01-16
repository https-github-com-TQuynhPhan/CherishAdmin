var express = require('express');
var router = express.Router();

const productsController = require('./productsController');

router.get('/', productsController.list);

router.get('/productsEdit', productsController.edit);

  router.get('/:id', productsController.detail);
  
  router.get('/productsCart', productsController.cart);

  router.get('/productsPayment', productsController.payment);

  router.get('/:categories', productsController.type);
module.exports = router;
