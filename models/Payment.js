const Sequelize = require('sequelize');
const db = require('../config/database');
const Advertisement = require('../models/Advertisement');
const PaymentMethod = require('../models/PaymentMethod');
const PaymentStatus = require('../models/PaymentStatus');

const Payment = db.define('payments', {
  advertisement_id: {
    type: Sequelize.STRING
  },
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

Payment.belongsTo(Advertisement, { foreignKey: 'advertisement_id' });
Payment.belongsTo(PaymentMethod, { foreignKey: 'paymentMethod_id' });
Payment.belongsTo(PaymentStatus, { foreignKey: 'paymentStatus_id' });

module.exports = Payment;
