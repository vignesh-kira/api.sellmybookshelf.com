const Sequelize = require('sequelize');
const db = require('../config/database');

const Class = db.define('classes', {
  name: {
    type: Sequelize.STRING
  },
  code: {
    type: Sequelize.STRING
  }
});

module.exports = Class;
