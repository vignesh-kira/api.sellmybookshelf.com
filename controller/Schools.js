const express = require('express');
const router = express.Router();
const School = require('../models/School');

// Get users list
router.get('/', (req, res) =>
    School.findAll()
        .then(schools => res.send(schools))
        .catch(err => console.log(err)));

module.exports = router;
