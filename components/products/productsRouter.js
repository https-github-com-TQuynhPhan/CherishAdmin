var express = require('express');
var router = express.Router();

const productsController = require('./productsController');

router.get('/', productsController.list);

router.get('/productsEdit/:id', productsController.edit);

  router.get('/productsAdd', productsController.add);

  router.post('/productsAdd/comfirm', productsController.addcomfirm);

  router.get('/:id', productsController.detail);
  
  router.get('/productsCart', productsController.cart);

  router.get('/productsPayment', productsController.payment);

  router.get('/:categories', productsController.type);

  router.post('/productsEdit/:id/comfirm', productsController.comfirm)
module.exports = router;
