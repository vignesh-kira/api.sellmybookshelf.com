const Sequelize = require('sequelize');
const db = require('../config/database');

const UserType = db.define('user_types', {
  type: {
    type: Sequelize.STRING
  },
  ucode: {
    type: Sequelize.STRING
  }
});

module.exports = UserType;
