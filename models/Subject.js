const Sequelize = require('sequelize');
const db = require('../config/database');

const Subject = db.define('subjects', {
  name: {
    type: Sequelize.STRING
  },
  code: {
    type: Sequelize.STRING
  }
});

module.exports = Subject;
