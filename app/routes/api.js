var express = require('express');
var router = express.Router();
var CustomerService = require('../services/customerService.js');

// ======= CREATE =======
router.post('/customer', function(req, res) {
    CustomerService.save(req, res, function(err) {
        res.status(400).json(err);
    }, function(user) {
        res.status(201).json(user);
    });
});

// ======= READ ONE =======
router.get('/customer/:id', function(req, res) {
    CustomerService.listOne(req, res, function(err) {
        res.status(400).json(err);
    }, function(user) {
        res.status(201).json(user);
    });
});

// ======= READ =======
router.get('/customer', function(req, res) {
    CustomerService.list(req, res, function(err) {
        res.status(400).json(err);
    }, function(users) {
        res.status(201).json(users);
    });
});

// ======= UPDATE =======
router.put('/customer/:id', function(req, res) {
    CustomerService.put(req, res, function(err) {
        res.status(400).json(err);
    }, function(user) {
        res.status(201).json(user);
    });
});

// ======= DELETE =======
router.delete('/customer/:id', function(req, res) {
    CustomerService.delete(req, res, function(err) {
        res.status(400).json(err);
    }, function(user) {
        res.status(201).json(user);
    });
});

module.exports = router;
