const Sequelize = require('sequelize');
const db = require('../config/database');
const PaymentMethod = require('../models/PaymentMethod');
const PaymentStatus = require('../models/PaymentStatus');

const Payment = db.define('payments', {
  paymentStatus_id: {
    type: Sequelize.STRING
  },
  paymentMethod_id: {
    type: Sequelize.STRING
  },
  history: {
    type: Sequelize.STRING
  }
});

Payment.belongsTo(PaymentMethod, { foreignKey: 'paymentMethod_id' });
Payment.belongsTo(PaymentStatus, { foreignKey: 'paymentStatus_id' });

module.exports = Payment;
