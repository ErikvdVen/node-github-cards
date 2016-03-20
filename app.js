var express = require('express');
var app = express();
var dotenv  = require('dotenv');
var GitHubApi = require("github");
var node_env = process.env.NODE_ENV || 'development';
var hbs     = require('express-hbs');

app.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/public/cards',
  defaultLayout: __dirname + '/public/index.html'
}));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/public/cards');

app.use('/', require(__dirname + '/app/routes'));
app.use(express.static(__dirname + '/public'));

app.listen(3000, function() {
  console.log('Listening on port 3000...')
})