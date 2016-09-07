var Customer = require('../models/customerModel');
var bcrypt = require('bcrypt-nodejs');

// ======= CREATE =======
exports.save = function(req, res, errback, callback) {

    // declare variables
    email = req.body.email;
    password = req.body.password;

    // request flow control
    if ((!('email' in req.body)) || email === '') {
        return res.status(422).json({
            message: 'Missing field: email'
        });
    } else if (typeof email !== 'string') {
        return res.status(422).json({
            message: 'Incorrect field type: email'
        });
    }

    if ((!('password' in req.body)) || password === '') {
        return res.status(422).json({
            message: 'Missing field: password'
        });
    } else if (typeof password !== 'string') {
        return res.status(422).json({
            message: 'Incorrect field type: password'
        });
    }

    // trim user inputs
    email = email.trim();
    password = password.trim();

    // salt and hash
    bcrypt.genSalt(10, function(err, salt) {
        if (err) {
            return res.status(500).json({
                message: 'Internal server error'
            });
        } else if (salt) {
            bcrypt.hash(password, salt, null, function(err, hash) {
                if (err) {
                    return res.status(500).json({
                        message: 'Internal server error'
                    });
                } else if (hash) {
                    Customer.create({
                        email: email,
                        password: hash
                    }, function(err, user) {
                        if (err) {
                            errback(err);
                            return;
                        } else if (user) {
                            callback(user);
                        }
                    });
                }

            });
        }
    });
}

exports.listOne = function(req, res, errback, callback) {

    var id = req.params.id;

    Customer.findOne({
        _id: id
    }, function(err, user) {
        if (err) {
            errback(err);
        } else if (user) {
            callback(user);
        }
    });
}

exports.list = function(req, res, errback, callback) {
    Customer.find(function(err, users) {
        if (err) {
            errback(err);
            return;
        } else if (users) {
            callback(users);
        }
    });
}

// exports.put = function(req, res, errback, callback) {
//
//     var id = req.params.id;
//
//     Customer.findOneAndUpdate({
//                 _id: id
//             }, UPDATE GOES HERE
//         },
//         function(err, user) {
//             if (err) {
//                 errback(err);
//             } else if (user) {
//                 callback(user);
//             }
//         });
// }

exports.delete = function(req, res, errback, callback) {

    var id = req.params.id;

    Customer.findOneAndRemove(id, function(err, user) {
        if (err) {
            errback(err);
            return;
        } else if (user) {
            callback(user);
        }
    });
}
