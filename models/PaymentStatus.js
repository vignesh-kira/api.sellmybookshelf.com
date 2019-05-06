const Sequelize = require('sequelize');
const db = require('../config/database');

const PaymentStatus = db.define('paymentStatuses', {
  name: {
    type: Sequelize.STRING
  },
  code: {
    type: Sequelize.STRING
  }
});

module.exports = PaymentStatus;
