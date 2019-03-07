const express = require('express');
const router = express.Router();
const Class = require('../models/Class');

// Get user types list
router.get('/', (req, res) =>
    Class.findAll()
        .then(classes => res.send(classes))
        .catch(err => console.log(err)));

module.exports = router;
