var User = require('../models/user.js');
var passwordUtil = require('../util/password.js'); 
var LocalStrategy = require('passport-local').Strategy;
var config = require('../../config');
const jwt = require('jsonwebtoken');

module.exports = function(passport){
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
    
    passport.deserializeUser(function(id, done) {
        User.findById(id, done);
    });

    passport.use('login', new LocalStrategy({
        usenameField:'username',
        passwordField:'password',
        passReqToCallback:true,
        session:false
    },
        function(req, username, password, done) {
            User.authenticate(username, password, function(err, user) {
                if (err) {
                    return done(err);
                }
                if (!user) {
                    var error = new Error('Username or password invalid.');
                    error.name = "InvalidLoginCredentials";
                    return done(error, false);
                }
                var tokenPayload = {
                    id:user._id
                }
                var token = jwt.sign(tokenPayload, config.jwtsecret);
                var data = {
                    name:user.username
                }
                return done(null, token, data);
            });
        }
    ));
    
    passport.use('register', new LocalStrategy({
            usenameField:'username',
            passwordField:'password',
            passReqToCallback:true,
            session:false
        },
        function(req, username, password, done){
            passwordUtil.hash(password, function(err, hashedPassword, newSalt){
                if(err){
                    return done(err);
                }
                else{
                    var userdata = {
                        username: username,
                        password: hashedPassword,
                        passwordSalt: newSalt
                    }
                    User.create(userdata, function(err, user){
                        if(err){
                            return done(err);
                        }
                        return done(null);
                    });
                }
            });        
        }
    ));
}