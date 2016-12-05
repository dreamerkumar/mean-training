'use strict';
var express = require('express');


var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/development');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log('Connection established to development');
});

require('./customer/customer-model');


var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


var customerRouter = require('./customer/customer-route');
app.use('/customer', customerRouter);
app.use('/app', express.static('client'));
app.use('/customer-client', express.static('customer/client'));


app.use('/bower_components', express.static('bower_components'));

app.listen(3000);