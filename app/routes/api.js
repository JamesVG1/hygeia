var express = require('express');
var router = express.Router();
// var Customer = require('../models/customerModel.js');

router.get('/customer', function(req, res) {
    res.json('Good routes');
});

module.exports = router;
