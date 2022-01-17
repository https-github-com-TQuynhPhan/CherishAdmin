const bcrypt = require("bcrypt");
const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

  const adminaccounts=require('../models/adminaccounts');

  passport.use(new LocalStrategy(

    async function (username, password, done) {
        try{
            const admin=await adminaccounts.findOne({ Account: username}).lean();
            if (!admin) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            const match=await validPassword(admin,password);
            if (!match) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, admin);
        }
        catch(err){
            return done(err);
        }
    },
));

passport.serializeUser(function (admin, done) {
    done(null, {username:admin.Account,password:admin.Password});
});

passport.deserializeUser(function (admin, done) {
    return done(null,admin);
});

async function validPassword(admin,password){
    return bcrypt.compare(password, admin.Password);
};

module.exports=passport;