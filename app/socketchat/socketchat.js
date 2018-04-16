function openSockets(io){
    io.on('connection', (client) =>{
        console.log('client connected');
        client.on('message', (data)=>{
            io.emit('message', data);
        });
    });
}

module.exports = openSockets;