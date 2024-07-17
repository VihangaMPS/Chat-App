const dotenv = require("dotenv");
const http = require("http");
const scoketio = require("socket.io");

const app = require('./app');
dotenv.config({path: './config.env'}); // applying custom environment variables to environment package

const server = http.createServer(app); // Creating the server manually bcuz we need to pass this server to socket
const io = scoketio(server);


let count = 0;
io.on('connection', (socket) => { // Listing to 'connection' function
    console.log('New WebSocket Connection');

    socket.emit('countUpdated', count);

    socket.on('increment', () => {
        count++
        // socket.emit('countUpdated', count); // -> emit to a single connection
        io.emit('countUpdated', count); // -> emit to all connection
    })
});

// ====================== SERVER ======================
const port = process.env.PORT;
server.listen(port, () => {
    console.log(`App running on port ${port}...`);
});