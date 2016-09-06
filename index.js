var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var port = process.env.PORT || 8080;
var url = 'mongodb://127.0.0.1/hygeia';

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, \
Authorization');
    next();
});

app.use(morgan('dev'));

mongoose.connect(url);
mongoose.connection.on('connected', function() {
    console.log('Mongoose default connection open to ' + url);
});
mongoose.connection.on('error', function(err) {
    console.log('Mongoose default connection error: ' + err);
});

// Routes
app.get('/', function(req, res) {
    res.send('Welcome to the home page!');
});

var apiRouter = require('./app/routes/api');

apiRouter.get('/', function(req, res) {
    res.json({
        message: 'hooray! welcome to our api!'
    });
});
app.use('/api', apiRouter);

app.listen(port);

console.log('Magic happens on port 8080!');
