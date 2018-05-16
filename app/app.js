//Imports
var path = require('path');
var express = require('express');
var io = require('socket.io');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var socketIO = require('socket.io');
var cors = require('cors');

var config = require('../config.js');

mongoose.connect(config.mongourl, function(err){
    console.log('Connected to mongo server at: ' + config.mongourl);
    startApp();
});

function startApp(){
    var app = express();

    setupMiddleware(app);

    var server = require('http').createServer(app);
    var port = config.port || 8000;
    server.listen(port, function () {
        console.log('Server listening at port %d', port);
    });

    setupSocketRoutes(server);
    setupRoutes(app);
}

//Initializing express appp
function setupMiddleware(app){
    app.use(bodyParser.urlencoded({extended: true }));
    app.use(bodyParser.json());

    app.use(passport.initialize());
    app.use(passport.session());
    require('./userAuth/passport.js').setupStrategies(passport);

    //Allows local react server to successfully connect
    app.use(cors({
        origin: 'http://localhost:3000',
        credentials: true
    }));

    app.use(express.static(path.join(__dirname, '../public')));
}

function setupSocketRoutes(httpSever){
    var ioServer = socketIO(httpSever);
    require('./socketchat/socketchat.js')(ioServer);
    require('./battle/battle')(ioServer);
}

function setupRoutes(app){
    require('./userAuth/userAuth.js')(app, passport);
    require('./mech/mechRoutes.js')(app);
    require('./currency/currencyRoutes.js')(app);
}
