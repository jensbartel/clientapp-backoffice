const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
    addressLine1: {
        type: String
    },
    addressLine2: {
        type: String
    },
    city: {
        type: String,
    },
    clientName: {
        type: String,
        required: true
    },
    company: {
        type: String
    },
    country: {
        type: String
    },
    date: {
        type: Date
    },
    email: {
        type: String,
        reuqired: true
    },
    greeting: {
        type: String
    },
    incharge: {
        type: String
    },
    industry: {
        type: String
    },
    mobile: {
        type: String
    },
    notes: {
        type: String
    },
    position: {
        type: String
    },
    reviewAddressLine1: {
        type: String
    },
    reviewAddressLine2: {
        type: String
    },
    tel: {
        type: String
    },
    wanobi: {
        type: String
    },
    zipcode: {
        type: String
    }
});

module.exports = mongoose.model('client', ClientSchema, 'Client');
  