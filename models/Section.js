const Sequelize = require('sequelize');
const db = require('../config/database');

const Section = db.define('sections', {
  name: {
    type: Sequelize.STRING
  },
  code: {
    type: Sequelize.STRING
  }
});

module.exports = Section;
