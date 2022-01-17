const bcrypt = require("bcrypt");
const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

  const adminaccounts=require('../models/adminaccounts');

  passport.use(new LocalStrategy(

    async function (username, password, done) {
        try{
            const user=await adminaccounts.findOne({ Account: username}).lean();
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if(user.Status === "Locked")
            {
                return done(null, false, { message: 'Your account has been locked!' });
            }
            const match=await validPassword(user,password);
            if (!match) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        }
        catch(err){
            return done(err);
        }
    },
));

passport.serializeUser(function (user, done) {
    done(null, {account:user.Account,password:user.Password});
});

passport.deserializeUser(function (user, done) {
    return done(null,user)
});

async function validPassword(user,password){
    return bcrypt.compare(password, user.Password);
};

module.exports=passport;