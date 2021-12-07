const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

const {models} = require('../models');

passport.use(new LocalStrategy(

  async function(username, password, done) {
    console.log(username,password);
    try
    {
      const user = await models.adminaccounts.findOne({where:{Account:username}, raw:true});
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!validPassword(user,password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
    }
    catch(err)
    {
      return done(err); 
    }
  }
));

passport.serializeUser(function(user, done) {
  done(null, {username: user.Account});
});

passport.deserializeUser(function(user, done) {
  return done(null,user);
});

function validPassword(user,password){
    return user.Password === password;
}

module.exports = passport;