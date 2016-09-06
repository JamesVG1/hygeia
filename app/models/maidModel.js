var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MaidSchema = new Schema({
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
        type: Date
    },
    address: {
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
});

module.exports = mongoose.model('Maid', MaidSchema);
