var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CustomerSchema = new Schema({
    email: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        select: false
    },
    billingInfo: {
        creditCard: {
            ccNumber: {
                type: Number
            },
            expDate: {
                type: Date
            },
            securityCode: {
                type: Number
            }
        }
    },
    address: {
        billing: {
            streetLineOne: {
                type: String,
                required: true
            },
            streetLineTwo: {
                type: String
            },
            city: {
                type: String
            },
            state: {
                type: String
            },
            zipCode: {
                type: Number
            }
        },
        shipping: {
            streetLineOne: {
                type: String,
                required: true
            },
            streetLineTwo: {
                type: String
            },
            city: {
                type: String
            },
            state: {
                type: String
            },
            zipCode: {
                type: Number
            }
        }
    }
});

module.exports = mongoose.model('Customer', CustomerSchema);
