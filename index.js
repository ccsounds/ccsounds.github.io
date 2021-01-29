const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

server.listen(3000, () => {
    console.log('listening on localhost:3000');
});

io.on('connection', (socket) => {

    console.log(`user ${socket.id} connected`);
    socket.broadcast.emit('connection', socket.id);

    socket.on('disconnect', () => {
        console.log(`user ${socket.id} disconnected`);
        socket.broadcast.emit('disconnection', socket.id);
    });

    socket.on('chat message', (msg) => {
        socket.broadcast.emit('chat message', msg);
    });

});