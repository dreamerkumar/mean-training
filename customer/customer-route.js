'use strict';

var express = require('express');

var customerRoute = express.Router();
var customer = require('./customer');

customerRoute.get('/', customer.list)
    .get('/:id', customer.get)
    .put('/:id', customer.put)
    .delete('/:id', customer.delete)
    .post('/', customer.create);



module.exports = customerRoute;