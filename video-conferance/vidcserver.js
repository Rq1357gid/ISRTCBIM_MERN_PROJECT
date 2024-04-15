// const express = require("express");
// const app = express();
// const server = require("http").Server(app);
// const io = require("socket.io")(server);
// const { v4: uuidV4 } = require('uuid');

// app.set('view engine', 'ejs')
// app.use(express.static('public'))


// app.get('/', (req, res) => {

//     res.redirect(`/${uuidV4()}`)
// })


// app.get('/:room', (req, res) => {

//     res.render('room', { roomId: req.params.room })
// })

// // io.on('connection', socket => {
// //     socket.on('join-room', (roomId, userId) => {
// //         // console.log(roomId, userId)
// //         socket.join(roomId)
// //         socket.to(roomId).broadcast.emit('user-connected', userId)

// //         socket.on('disconnect', () => {
// //             socket.to(roomId).broadcast.emit('user-disconnected', userId)

// io.on('connection', socket => {
//     socket.on('join-room', (roomId, userId) => {
//         socket.join(roomId);
//         socket.to(roomId).broadcast.emit('user-connected', userId);

//         socket.on('disconnect', () => {
//             io.to(roomId).emit('user-disconnected', userId);
//         })
//     })
// });

// server.listen(3000);



// // io.on('join-room', (roomId, userId) => {
// //     socket.join(roomId); // Join the room

// //     // Check if the client is successfully joined before broadcasting
// //     if (io.sockets.adapter.rooms.get(roomId) && io.sockets.adapter.rooms.get(roomId).has(socket.id)) {
// //         socket.to(roomId).broadcast.emit('user-connected', userId);
// //     } else {
// //         // Handle the case where the client couldn't join (e.g., room doesn't exist)
// //         console.error("Client failed to join room:", roomId);
// //     }
// // });




const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const { v4: uuidV4 } = require('uuid');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.redirect(`/${uuidV4()}`);
});

app.get('/:room', (req, res) => {
    res.render('room', { roomId: req.params.room });
});

// Set the correct MIME type for JavaScript files
app.get('/public/script.js', (req, res) => {
    res.type('text/javascript');
    res.sendFile(__dirname + '/public/script.js');
});

io.on('connection', socket => {
    socket.on('join-room', (roomId, userId) => {
        socket.join(roomId);
        socket.to(roomId).emit('user-connected', userId); // Change this line
        socket.on('disconnect', () => {
            io.to(roomId).emit('user-disconnected', userId);
        });
    });
});

server.listen(3005);
