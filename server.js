const mongoose = require('mongoose');
const dotenv = require("dotenv"); // use to get environment package
const http = require("http");
const scoketio = require("socket.io");

dotenv.config({path: './config.env'}); // applying custom environment variables to environment package
const app = require('./app');

const server = http.createServer(app); // Creating the server manually bcuz we need to pass this server to socket
const io = scoketio(server);



// ================= DataBase Connection =================
const LocalDB = process.env.DATABASE_LOCAL; // Mongo Local
mongoose.connect(LocalDB).then(() => console.log('DB Connection successful!'));

let count = 0;
io.on('connection', (socket) => { // Listing to 'connection' function
    console.log('New WebSocket Connection');

    socket.emit('countUpdated', count);
});

// ====================== SERVER ======================
const port = process.env.PORT;
server.listen(port, () => {
    console.log(`App running on port ${port}...`);
});