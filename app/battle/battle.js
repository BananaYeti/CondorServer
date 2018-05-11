const jwt = require('jsonwebtoken');
const config = require('../../config');

const matchCollection = {
    queue:[],
    matches:[]
}

function openSockets(io){
    io.of('/match').on('connection', (client) =>{

        client.on('matchmake', (token) => {

            jwt.verify(token, config.jwtsecret, (err, decoded) => {
                if(err){
                    socket.emit('error', 'User token is invalid');
                } else {
                    client.uid = decoded.id;            
                    if(client.gameId){
                        client.emit('matchMessage', 'You are already in a match');
                    } else {
                        findMatch(client, io);
                    }
                }
            });
        });

    });
}

function enterQueue(client){
    var matchObject = {};
    matchObject.id = (Math.random() + 1).toString(36).slice(2,18);

    matchObject.playerone_uid = client.uid;
    matchObject.playerone_id = client.id;

    matchCollection.queue.push(matchObject);

    joinGame(matchObject, client);
}

function joinGame(matchObject, client){
    client.join(matchObject.id);

    client.emit('joinedMatch', {
        gameId:matchObject.id
    });

    client.gameId = matchObject.id;
}

function findMatch(client, io){
    if(matchCollection.queue.length > 0){
        var matchObject = matchCollection.queue[0];
        joinGame(matchObject, client);

        matchObject.playertwo_uid = client.uid;
        matchObject.playertwo_id = client.id;

        matchCollection.queue.shift();

        console.log('Starting match');

        io.of('/match').to(matchObject.id).emit('matchMessage', 'The fight will now commence, ready your fisticuffs');
    } else {
        enterQueue(client);
    }
}

module.exports = openSockets;
