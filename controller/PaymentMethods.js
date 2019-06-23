const express = require('express');
const router = express.Router();
const PaymentMethods = require('../models/PaymentMethod');

// Get Subjects list
router.get('/', (req, res) =>
	PaymentMethods.findAll()
        .then(methods => res.send(methods))
        .catch(err => console.log(err)));

module.exports = router;
