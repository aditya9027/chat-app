const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// set static folder
app.use(express.static(path.join(__dirname, '../public')))

io.on('connection', (socket) => {
    // console.log(socket);
    console.log('New Connection..');

    // socket.emit('newMessage', {
    //     from: 'jen@mds',
    //     text: 'hepppp',
    //     createdAt: 123
    // });

    // // listen for message from user
    // socket.on('createMessage', (newMessage) => {
    //     console.log('newMessage', newMessage);
    // });

    // socket.broadcast.emit('hi');

    // socket.on('chat message', (msg) => {
    //     console.log('message: ' + msg, ` ${socket.id}`);
    // });

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('disconnected from user');
    });
})

const port = 3000 || process.env.PORT;

server.listen(port, () => console.log(`Server listen at port ${port}`));

