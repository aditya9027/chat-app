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
    console.log('New Connection..');
})


const port = 3000 || process.env.PORT;

server.listen(port, () => console.log(`Server listen at port ${port}`));

