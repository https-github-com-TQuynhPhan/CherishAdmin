const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

  const adminaccounts=require('../models/adminaccounts');

  passport.use(new LocalStrategy(

    async function (username, password, done) {
        try{
            const user=await adminaccounts.findOne({ Account: username }).lean();
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
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

passport.serializeUser(function (admin, done) {
    done(null, {account:admin.Account,password:admin.Password});
});

passport.deserializeUser(function (admin, done) {
    return done(null,admin);
});

async function validPassword(admin,password){
    return bcrypt.compare(password, admin.Password);
};

module.exports=passport;