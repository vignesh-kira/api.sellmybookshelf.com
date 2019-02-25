const express = require('express');
const router = express.Router();
const Advertisement = require('../models/Advertisement');

// Get users list
router.get('/', (req, res) =>
    Advertisement.findAll()
        .then(advertisements => res.send(advertisements))
        .catch(err => console.log(err)));

module.exports = router;
