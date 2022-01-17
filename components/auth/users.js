var express = require('express');
const passport = require('../../auth/passport');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('Login', {layout: 'login.hbs'});
});

module.exports = router;

router.post('/', passport.authenticate('local',
{ 
  successRedirect: '/dashboard',
  failureRedirect: '/?WrongUsernameOrPasswordOrYourAccountHasBeenLocked', 
})
/*function (req,res) {
  if(req.user)
    res.redirect('/dashboard');
  else
    res.redirect('/');
  },*/
  
);

router.get('/logout', function(req, res, next) {
  req.logout();
  res.redirect('/');
});