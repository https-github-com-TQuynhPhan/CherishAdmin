var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dashboard' });
});

router.get('/analytics', function(req, res, next) {
  res.render('analytics', { title: 'Dashboard' });
});

module.exports = router;
