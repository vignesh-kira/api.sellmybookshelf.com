const Sequelize = require('sequelize');
const db = require('../config/database');

const School = db.define('schools', {
  name: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  address: {
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.STRING
  },
  postal_code: {
    type: Sequelize.STRING
  }
});

module.exports = School;
