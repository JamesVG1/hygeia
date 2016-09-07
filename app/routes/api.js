var express = require('express');
var router = express.Router();
var CustomerService = require('../services/customerService.js');

router.post('/customer', function(req, res) {
    CustomerService.save(req, res, function(err) {
        res.status(400).json(err);
    }, function(user) {
        res.status(201).json(user);
    });
});

router.get('/customer/:id', function(req, res) {
    CustomerService.listOne(req, res, function(err) {
        res.status(400).json(err);
    }, function(user) {
        res.status(201).json(user);
    });
});

router.get('/customer', function(req, res) {
    CustomerService.list(req, res, function(err) {
        res.status(400).json(err);
    }, function(users) {
        res.status(201).json(users);
    });
});

router.put('/customer/:id', function(req, res) {

});

router.delete('/customer/:id', function(req, res) {
    CustomerService.delete(req, res, function(err) {
        res.status(400).json(err);
    }, function(user) {
        res.status(201).json(user);
    });
});

module.exports = router;
