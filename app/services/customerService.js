var express = require('express');
var app = express();
var bcrypt = require('bcrypt-nodejs');
var Customer = require('../models/customer-model');

// ==========CREATE==========

// create customer
exports.save = function(req, res) {

    // no req.body
    if (!req.body) {
        return res.status(400).json({
            message: 'No request body.'
        });
    }

    // no email in req.body
    if (!('email' in req.body)) {
        return res.status(422).json({
            message: 'Missing field: email'
        });
    }

    var email = req.body.email;

    // incorrect email input
    if (typeof email !== 'string') {
        return res.status(422).json({
            message: 'Incorrect field type: email'
        });
    }

    // take extra spaces out of input
    email = email.trim();

    // no email input
    if (email === '') {
        return res.status(422).json()({
            message: 'Incorrect field length: email'
        });
    }

    // take extra spaces out of input
    password = password.trim();

    // no password in req.body
    if (!('password' in req.body)) {
        return res.status(422).json({
            message: 'Missing field: password'
        });
    }

    // salt password(repetitions of encryption)
    bcrypt.genSalt(10, function(err, salt) {
        if (err) {
            return res.status(500).json({
                message: 'Internal server error'
            });
        }

        // password encryption
        bcrypt.hash(password, salt, function(err, hash) {
            if (err) {
                return res.status(500).json({
                    message: 'Internal server error'
                });
            }

            // create customer w/ email and newly created hash
            Customer.create({
                email: email,
                password: hash
            }, function(err, user) {
                if (err) {
                    res.json(err);
                } else {
                    res.json(user);
                }
            });
        });
    });
};


// ==========READ==========
// read all customers
exports.list = function(callback) {
    Customer.find(function(err, users) {
        if (err) {
            callback(err);
            return;
        } else {
            callback(null, users);
        }
    });
};

// read one customer
exports.listOne = function(id, callback, errback) {
    Customer.findOne({
        _id: id
    }, function(err, user) {
        if (err) {
            errback(err);
            return;
        } else {
            callback(user);
        }
    });
};

// ==========UPDATE==========
// update user
exports.put = function(req, res) {

};

// ==========DELETE==========
exports.delete = function(req, res) {

};
