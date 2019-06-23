const express = require('express');
const router = express.Router();
const PaymentStatuses = require('../models/PaymentStatus');

// Get Payment Statuses list
router.get('/', (req, res) =>
	PaymentStatuses.findAll()
        .then(paymentStatus => res.send(paymentStatus))
        .catch(err => console.log(err)));

module.exports = router;
