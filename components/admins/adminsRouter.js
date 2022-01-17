var express = require('express');
var router = express.Router();

const adminsController = require('./adminsController');

router.get('/', adminsController.list);

router.get('/adminsEdit/:Account',adminsController.edit);
//router.post('/adminsEdit/',adminsController.saveEdit);

router.get("/addAdmin", (req, res) => {
    res.render('admins/adminsAdd');
});

router.post('/newAdmin',adminsController.add);

router.get('/adminsDetail/:Account',adminsController.detail);

module.exports = router;