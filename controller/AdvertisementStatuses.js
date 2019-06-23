const express = require('express');
const router = express.Router();
const AdvertisementStatuses = require('../models/AdvertisementStatus');

// Get Subjects list
router.get('/', (req, res) =>
	AdvertisementStatuses.findAll()
        .then(advertisement => res.send(advertisement))
        .catch(err => console.log(err)));

module.exports = router;
