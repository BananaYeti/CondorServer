var path = require('path');

var express = require('express');
var app = express();
app.use(express.static(path.join(__dirname, '../public')));


var server = require('http').createServer(app);
var port = process.env.port || 8800;
server.listen(port, function () {
    console.log('Server listening at port %d', port);
});

var io = require('socket.io')(server);
require('./socketchat/socketchat.js')(io);

var path = require('path');