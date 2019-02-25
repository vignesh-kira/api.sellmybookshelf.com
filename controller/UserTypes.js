const express = require('express');
const router = express.Router();
const UserType = require('../models/UserType');

// Get user types list
router.get('/', (req, res) =>
    UserType.findAll()
        .then(userTypes => res.send(userTypes))
        .catch(err => console.log(err)));

module.exports = router;
