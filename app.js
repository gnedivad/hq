var http = require('http');
var express = require('express');
var app = express();

var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/tweet-fetcher-db');

require('./routes/index.js')(app);
require('./settings')(app, express);

var server = app.listen(process.env.PORT || 9292);
console.log("Listening at 127.0.0.1:" + 9292);

var io = require('socket.io').listen(server);