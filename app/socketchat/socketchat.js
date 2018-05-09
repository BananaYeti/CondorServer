const DEFAULT_CHAT = "global";

function openSockets(io){
  io.of('/chat').on('connection', (socket) =>{
      console.log('client connected');
      socket.join(DEFAULT_CHAT);
      socket.room =DEFAULT_CHAT;

      socket.on('join', function(room, ack){
        var oldRoom = socket.room;
        if(oldRoom){
          socket.leave(oldRoom);
        }
        socket.room = room;
        socket.join(room);
        ack();
      });


      socket.on('message', function(message){
        var room = socket.room
        if (room){
          io.of('/chat').to(room).emit('broadcast', message);
        } else {
          socket.emit('error', 'not in a chat room');
        }
      });
    });
}

module.exports = openSockets;
