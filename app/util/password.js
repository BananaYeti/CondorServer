var LEN = 256;  
var SALT_LEN = 64;  
var ITERATIONS = 10000;  
var DIGEST = 'sha256';

var crypto = require('crypto');

function hashPassword(password, salt, callback) {  
  var len = LEN / 2;

  if (3 === arguments.length) {
    crypto.pbkdf2(password, salt, ITERATIONS, len, DIGEST, function(err, derivedKey) {
      if (err) {
        return callback(err);
      }
      return callback(null, derivedKey.toString('hex'));
    });
  } else {
    callback = salt;
    crypto.randomBytes(SALT_LEN / 2, function(err, salt) {
      if (err) {
        return callback(err);
      }

      salt = salt.toString('hex');
      crypto.pbkdf2(password, salt, ITERATIONS, len, DIGEST, function(err, derivedKey) {
        if (err) {
          return callback(err);
        }

        callback(null, derivedKey.toString('hex'), salt);
      });
    });
  }
}

function verify(rawPassword, password, salt, callback){
  hashPassword(rawPassword, salt, function(err, hashedPswd){
    if(err){
      return callback(err);
    }
    return callback(null, password === hashedPswd);
  });
}

module.exports.hash = hashPassword;
module.exports.verify = verify;