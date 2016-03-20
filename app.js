var express = require('express');
var app = express();
var dotenv  = require('dotenv');
var hbs     = require('express-hbs');
var config = require('config-node')();

var port = process.env.PORT || config.port;

app.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/public/cards',
  defaultLayout: __dirname + '/public/index.html'
}));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/public/cards');

app.use('/', require(__dirname + '/app/routes'));
app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
  console.log('Listening on port ' + port + '...')
})