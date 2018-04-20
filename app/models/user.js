var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var passwordUtil = require('../util/password.js'); 

var UserSchema = new  mongoose.Schema({
    username : {
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    passwordSalt:{
        type:String,
        required:true,
        select:false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

UserSchema.statics.authenticate = function(username, password, callback) {  
    this.findOne({ username: username }).select('+password +passwordSalt').exec(function(err, user) {
        if (err) {
            return callback(err, null);
        }
  
        // no user found just return the empty user
        if (!user) {
            return callback(err, user);
        }
  
        // verify the password with the existing hash from the user
        passwordUtil.verify(password, user.password, user.passwordSalt, function(err, result) {
            if (err) {
                return callback(err, null);
            }
  
        // if password does not match don't return user
        if (result === false) {
          return callback(err, null);
        }
  
        // remove password and salt from the result
        user.password = undefined;
        user.passwordSalt = undefined;
        // return user if everything is ok
        callback(err, user);
        });
    });
}

var User = mongoose.model('User', UserSchema);
module.exports = User;