var socket = io();

$('form').submit(function() {
	var text = $('#message').val();
	var initials = $('#initials').val();
	//alert(text);
	var totalText = initials.concat(" says: ", text)
	socket.emit('message', totalText);
	$('#message').val('')
	return false;
});

//var messageHistory = []

// for (var i = 0; i < messageHistory.length; i++) {
// 	$('<li>').text(msg).appendTo('#history');
// }

socket.on('message', function (msg) {
  $('<li>').text(msg).appendTo('#history');
  //messageHistory.push(msg)
  //console.log(msg)
  //console.log(messageHistory)
});