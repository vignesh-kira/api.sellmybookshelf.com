const express = require('express');
const router = express.Router();
const Section = require('../models/Section');

// Get user types list
router.get('/', (req, res) =>
    Section.findAll()
        .then(sections => res.send(sections))
        .catch(err => console.log(err)));

module.exports = router;
