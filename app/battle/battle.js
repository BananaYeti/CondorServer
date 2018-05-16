const jwt = require('jsonwebtoken');
const config = require('../../config');
const mechUtil = require('../mech/mechUtil');

const matchCollection = {
    queue:[],
    matches:{}
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

        client.on('forfit', () => {
            if(client.gameId){
                endMatch(matchCollection.matches[client.gameId]);
            } else {
                client.emit('matchEnded');
            }
        });

    });

}

function createGame(client){
    var matchObject = {};
    matchObject.id = (Math.random() + 1).toString(36).slice(2,18);

    matchObject.playerone_uid = client.uid;
    matchObject.playerone_id = client.id;
    matchObject.playerone = client;

    matchCollection.queue.push(matchObject);
    matchCollection.matches[matchObject.id] = matchObject;

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
        matchObject.playertwo = client;

        matchCollection.queue.shift();

        startMatch(matchObject);
    } else {
        createGame(client);
    }
}

function startMatch(matchObject){

    matchObject.playerone.emit('matchMessage', 'The fight will now commence, ready your fisticuffs');
    matchObject.playertwo.emit('matchMessage', 'The fight will now commence, ready your fisticuffs');

    mechUtil.getMech(matchObject.playerone_uid, function(mech){
        matchObject.playertwo.emit('enemyMech', mech);
        console.log(mech);
    });

    mechUtil.getMech(matchObject.playertwo_uid, function(mech){
        console.log(mech);
        matchObject.playerone.emit('enemyMech', mech);
    });

}

function runMatch(matchObject){
    //Determine player attack order and set up match state
    matchObject.playerone.emit('turn', 'where do you want to attack', function(point){
        matchObject.playerone.emit('matchMessage', 'you dealt damage probably');
    });
    matchObject.playertwo.emit('turn', 'where do you want to attack', function(point){
        matchObject.playertwo.emit('matchMessage', 'you dealt damage probably');
    });
}

function endMatch(matchObject){
    matchObject.playerone.emit('matchEnded');
    matchObject.playerone.gameId = undefined;
    
    if(matchObject.playertwo){
        matchObject.playertwo.emit('matchEnded');
        matchObject.playertwo.gameId = undefined;
    }
    
    matchCollection.matches[matchObject.id] = undefined;
}

module.exports = openSockets;
