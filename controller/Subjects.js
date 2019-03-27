const express = require('express');
const router = express.Router();
const Subject = require('../models/Subject');

// Get Subjects list
router.get('/', (req, res) =>
	Subject.findAll()
        .then(subjects => res.send(subjects))
        .catch(err => console.log(err)));

module.exports = router;
