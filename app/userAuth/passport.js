var User = require('../models/user.js');
var passwordUtil = require('../util/password.js'); 
var LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport){
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
    
    passport.deserializeUser(function(id, done) {
        User.findById(id, done);
    });

    passport.use('login', new LocalStrategy({},
        function(username, password, done) {
            User.authenticate(username, password, function(err, user) {
                if (err) {
                    return done(err);
                }
                if (!user) {
                    return done(null, false, { message: 'Invalid username or password.' });
                }
                return done(null, user);
            });
        }
    ));
    
    passport.use('signup', new LocalStrategy({},
        function(username, password, done){
            passwordUtil.hash(password, function(err, hashedPassword, newSalt){
                if(err){
                    next(err);
                }
                else{
                    var userdata = {
                        username: username,
                        password: hashedPassword,
                        passwordSalt: newSalt
                    }
                    User.create(userdata, function(err, user){
                        next(err);
                    });
                }
            });        
        }
    ));
}