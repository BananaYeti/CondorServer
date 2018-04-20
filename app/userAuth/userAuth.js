function setupRoutes(app, passport){
    app.post('/register', passport.authenticate('signup', {
        successRedirect:'/tokenTest',
        failureRedirect:'/login.html'
    }));
    app.post('/login', passport.authenticate('login', {
        successRedirect:'/tokenTest',
        failureRedirect:'/login.html'        
    }));
    app.get('/tokenTest', function(req, res, next){
        console.log(req.user);
        console.log(req.isAuthenticated());
        console.log('session checked');
        res.send(req.user);
    });
    app.get('/logout', function(req, res, next){
        req.logout();
        req.redirect('/login.html');
    });
}

module.exports = setupRoutes;