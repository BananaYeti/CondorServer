function openSockets(io){
    io.on('connection', (client) =>{
        console.log('fighter connected');
        client.on('target', (data)=>{
            io.emit('target', data);
            console.log(data);
        });
    });
}

module.exports = openSockets;
