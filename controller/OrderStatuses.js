const express = require('express');
const router = express.Router();
const OrderStatuses = require('../models/OrderStatus');

// Get Order Statuses list
router.get('/', (req, res) =>
	OrderStatuses.findAll()
        .then(orderStatus => res.send(orderStatus))
        .catch(err => console.log(err)));

module.exports = router;
