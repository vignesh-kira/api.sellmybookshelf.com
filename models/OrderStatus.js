const Sequelize = require('sequelize');
const db = require('../config/database');

const OrderStatus = db.define('orderStatuses', {
  name: {
    type: Sequelize.STRING
  },
  code: {
    type: Sequelize.STRING
  }
});

module.exports = OrderStatus;
