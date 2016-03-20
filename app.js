var express = require('express');
var app = express();
var webshot = require('webshot');
var fs      = require('fs');
port = process.argv[2] || 8000;

app.get('/', function(req, res) {

	var file = 'google.png';
	webshot('google.com', 'google.png', function(err) {


	  console.log(__dirname+file);

	res.sendFile(file, { root: __dirname });
	});
	
});

app.listen(port); //the port you want to use
console.log("Express server running on port "+port);