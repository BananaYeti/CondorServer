function setupRoutes(app, passport){
    app.post('/register', (req, res, next) => {
        return passport.authenticate('register', (err) => {
            if(err){
                return res.status(400).json({
                    sucess:false,
                    message:err.message
                });                    
            }
            return res.status(200).json({
                success:true,
                message:"You should now be able to log in"
            });
        });
    });
    app.post('/login', (req, res, next) => {
        return passport.authenticate('login', (err, token, data) => {
            if(err){
                return res.status(400).json({
                    success:false,
                    message:err.message
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
    app.get('/tokenTest', function(req, res, next){
        if(req.headers.authorization){
            res.send('You are logged in');
        } else { 
            res.send('You are not logged in');
        }
    });
}

module.exports = setupRoutes;