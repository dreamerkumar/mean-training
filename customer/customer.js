'use strict';
var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

var customer = {

    list: function(req, res) {
        Customer.find(function(err, result){
            if(err){
                console.log('Could not get the list of customers');
                res.status(500).send({error: 'Could not get the list of customers'});
            } else {
                res.json(result);
            }
        });
    },

    get: function(req, res){
        var id = req.params.id;
        Customer.findById(id).exec(function(err, result){
            if(err){
                console.log('Could not get the specific customer');
                res.status(404).send({error: 'Could not get the specific customer'});
            } else {
                if(!result){
                    res.status(404).send({error: 'Could not get the specific customer'});
                } else {
                    res.json(result);
                }
            }
        });
    },

    create: function(req, res) {
        var customerData = req.body;
        var customer = new Customer({
            firstName: customerData.firstName,
            lastName: customerData.lastName
        });
        customer.save(function(err, result){
            if(err){
                console.log('Could not save the customers');
                res.status(500).send({error: 'Could not save the customer'});
            } else {
                res.send('New customer successfully saved');
            }    
        });
    },

    put: function(req, res) {
        var id = req.params.id;
        var customerData = req.body;
        Customer.findById(id).exec(function(err, result){
            if(err){
                console.log('Update failed. Could not get the specific customer');
                res.status(404).send({error: 'Update failed. Could not get the specific customer'});
            } else {
                result.firstName = customerData.firstName;
                result.lastName = customerData.lastName;
                result.save(function(err){
                    if(err){
                        console.log('Could not save the customer');
                        res.status(500).send({error: 'Could not save the customer'});                        
                    } else {
                        res.send('Save successfully');
                    }
                });
            }
        });     
    },

    delete: function(req, res) {
        var id = req.params.id;
        Customer.findById(id).exec(function(err, result){
            if(err){
                console.log('Could not get the specific customer');
                res.status(404).send({error: 'Could not get the specific customer'});
            } else {
                result.remove(function(err){
                    if(err){
                        console.log('Could not delete the customer');
                        res.status(500).send({error: 'Could not delete the customer'});                        
                    } else {
                        res.send('Deleted successfully');
                    }
                });
            }
        });
    }

};


module.exports = customer;