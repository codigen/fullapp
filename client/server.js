// const express = require('express');

// const path = require('path');

// app = express();
// var io = module.exports.io = require("socket.io")(app)

// app.use(express.static(path.join(__dirname, 'build')));

// app.get('*', (req, res) => {
// 	res.sendFile(path.join(__dirname, 'build'));
// });

// const port = process.env.port || process.env.PORT || 4000;

// const server = app.listen(port);

// server.on('listening', () =>
//   console.info(`Unclebanks front end server started on ${port}`)
// );

var express = require("express");
var http = require("http");
var app = express();
 const path = require('path');
 const cors = require('cors');
 var config = require('./config');

// var io = require("socket.io")(server);

// app.use(cors());
// app.use(express.static("./client"));
// app.use(function(req, res, next) { //allow cross origin requests
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

//   next();
// });

// app.use(cors());

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'build'));
});

// const SocketManager = require("./socketManager")
// io.on("connection", SocketManager )
// io.on("connection", function(socket) {
 
//     socket.broadcast.emit('announcements', { message: 'A new user has joined!' });

//     socket.on("chat", function(message) {
//     	socket.broadcast.emit("message", message);
//     });

//     socket.on("typeing", function(message) {
//     	socket.broadcast.emit("nexttype",  { message: 'type..........' });
//     });

//     // socket.broadcast.emit('typeing', { message: '......' });

// 	socket.emit("message", "Welcome to Cyber Chat");

// });
var server = http.createServer(app).listen(config.port);

console.log("Starting Socket App -",config.port);