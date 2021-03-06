var User = require('../models/user.js');
var Mech = require('../models/mech.js');
var passwordUtil = require('../util/password.js');
var LocalStrategy = require('passport-local').Strategy;
var config = require('../../config');
const jwt = require('jsonwebtoken');

function setupStrategies(passport){
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
                    console.log('Mongo error');
                    return done(err);
                }
                if (!user) {
                    var error = new Error('Username or password invalid.');
                    error.name = "InvalidLoginCredentials";
                    console.log('No user exists');
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
            console.log('hasing password');
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
                        console.log('User created successfully');
                        Mech.create({userID:user._id}, function(err, mech){                    
                            if(err){
                                return done(err);
                            }
                            console.log('Mech created successfully');
                            console.log('mech id is: ' + mech._id);
                            user.update({$set: {mechID:mech._id}}, (err)=>{
                                if(err){
                                    return done(err);
                                }
                                return done(null);
                            });
                        });
                    });
                }
            });
        }
    ));
}

function verifyUserRoute(req, res, next){
    console.log('verifying user');
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, config.jwtsecret, function (err, decoded) {
            if (err) {
                var err = new Error('You are not authenticated!');
                err.status = 401;
                return next(err);
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });
    } else {
        // if there is no token
        // return an error
        var err = new Error('No token provided!');
        err.status = 403;
        return next(err);
    }
}

module.exports = {
    setupStrategies,
    verifyUserRoute
}