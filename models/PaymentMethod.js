const Sequelize = require('sequelize');
const db = require('../config/database');

const PaymentMethod = db.define('paymentMethods', {
  name: {
    type: Sequelize.STRING
  },
  code: {
    type: Sequelize.STRING
  }
});

module.exports = PaymentMethod;
