'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
(function(){
    var customerSchema = new Schema({
        firstName :{
            type: String,
            default: '',
            trim: true,
            required: 'Please fill in the first name'
        },

        lastName: {
            type: String,
            default: '',
            trim: true,
            required: 'Please fill in the first name'
        },

        createdDate: {
            type: Date,
            default: Date.now
        }

    });

    mongoose.model('Customer', customerSchema);
})();



