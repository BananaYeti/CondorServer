const jwt = require('jsonwebtoken');
var config = require('../../config');
var passportUtil = require('./passport');

function setupRoutes(app, passport){
    app.post('/register', (req, res, next) => {
        return passport.authenticate('register', (err) => {
            if(err){
                console.log(err);
                return res.status(400).json({
                    sucess:false,
                    message:err.message
                });                    
            }
            return res.status(200).json({
                success:true,
                message:"You should now be able to log in"
            });
        })(req, res, next);
    });
    app.post('/login', (req, res, next) => {
        return passport.authenticate('login', (err, token, data) => {
            if(err){
                return res.status(400).json({
                    success:false,
                    message:err.message
                });
            }
            if(!token){
                return res.status(400).json({
                    success:false,
                    message:'Login unsuccessful'
                });
            }
            return res.status(200).json({
                success: true,
                message: 'You have successfully logged in!',
                token,
                user: data
            });
        })(req, res, next);
    });
    app.get('/tokenTest', passportUtil.verifyUserRoute, function(req, res, next){
        if(req.decoded){
            console.log(req.decoded);
            res.send('Welcome user ' + req.decoded);
            next();
        }
        else{
            res.send("You are not logged in");
        }
    });
}

module.exports = setupRoutes;