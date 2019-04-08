const express = require('express');
const router = express.Router();
const AdvertisementStatus = require('../models/AdvertisementStatus');

// Get Subjects list
router.get('/', (req, res) =>
	AdvertisementStatus.findAll()
        .then(advertisement => res.send(advertisement))
        .catch(err => console.log(err)));

module.exports = router;
