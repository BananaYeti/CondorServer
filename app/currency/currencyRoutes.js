var passportUtil = require('../userAuth/passport');
var User = require('../models/user');

module.exports = function(app){
    app.get('/getCredits', passportUtil.verifyUserRoute, function(req, res, next){
        if(req.decoded){
            var uid = req.decoded.id;
            getCredits({_id:uid}, function(credits){
                if(credits){
                    res.status(200).send(credits + "");
                }else{
                    res.status(404).send("Cannot find user");
                }
            });
        } else {
            res.status(401).send('Error: you are not authenticated');            
        }
    });
    app.post('/sendCredits', passportUtil.verifyUserRoute, function(req, res, next){
        if(req.decoded){
            var uid = req.decoded.id;
            getCredits({_id:uid}, function(originalCredits){
                if(originalCredits < req.body.value){
                    res.status(400).send("error - cannot send less credits than you have");
                    return next();
                }
                changeUserCredits({username:req.body.username}, parseInt(req.body.value), (endCredits) => {
                    if(!endCredits){
                        res.status(400).send("Transaction could not complete");
                        return next();
                    }
                    changeUserCredits({_id:uid}, -parseInt(req.body.value), (endRecipientCredits) => {
                        if(!endCredits){
                            res.status(400).send("Transaction could not complete");
                        } else {
                            res.status(200).send("" + endCredits);
                        }
                    });
                });
            });
        } else {
            res.status(401).send('Error: you are not authenticated');
        }
    });
}

function getCredits(queryObject, done){
    User.findOne(queryObject, function(err, user){
        if(err || !user){
            done(null);
        } else {
            done(user.credits);
        }
    });
}

function changeUserCredits(queryObject, change, done){
    User.findOne(queryObject, function(err, user){
        if(err || !user){
            done(null);
        } else {
            user.credits = parseInt(user.credits) + change;
            user.markModified('credits');
            user.save(function(err, user){
                done(user.credits);
            });
        }
    });
}