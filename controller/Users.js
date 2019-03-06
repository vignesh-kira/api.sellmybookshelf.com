const express = require('express');
const router = express.Router();
const Users = require('../models/User');

// Get users list
router.get('/', (req, res) =>
    Users.findAll()
        .then(users => res.send(users))
        .catch(err => console.log(err)));

// Login
router.post('/login', (req, res) => {
  let { email, password} = req.body;

  return Users.findOne({ where: {
      email,
      password
    }})
      .then(user => {
        if(user == null){
          res.sendStatus(404);
        }else{
          res.status(200).json(user)
        }
      })
      .catch( error => res.status(500).send(error))
});

// Login
router.post('/add', (req, res) => {
  let { title, technologies, budget, description, contact_email } = req.body;
  // Make lowercase and remove space after comma
  technologies = technologies.toLowerCase().replace(/, /g, ',');

  // Insert into table
  Users.create({
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
