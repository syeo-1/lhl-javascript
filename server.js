var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

app.use(express.static('client'));

var io = require('socket.io')(server);

var messageHistory = [];

io.on('connection', function (socket) {
	console.log("connected")
	messageHistory.forEach(function(message) {
		socket.emit("message", message);
	});

  socket.on('message', function (msg) {
  	messageHistory.push(msg);
  	console.log(messageHistory);
    io.emit('message', msg);
  });
});
//add stuff above here

//var messageHistory = [];


server.listen(8080, function(){
	console.log('Chat server running');
});
