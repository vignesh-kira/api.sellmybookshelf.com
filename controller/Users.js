const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Get users list
router.get('/', (req, res) =>
    User.findAll()
        .then(users => res.send(users))
        .catch(err => console.log(err)));

// Add a user
router.post('/add', (req, res) => {
  let { title, technologies, budget, description, contact_email } = req.body;
  // Make lowercase and remove space after comma
  technologies = technologies.toLowerCase().replace(/, /g, ',');

  // Insert into table
  User.create({
    title,
    technologies,
    description,
    budget,
    contact_email
  })
      .then(user => res.send(user))
      .catch(err => console.log(err));
});

module.exports = router;
