const Sequelize = require('sequelize');
const db = require('../config/database');
const User = require('../models/User');
const Advertisement = require('../models/Advertisement');
const OrderStatus = require('../models/OrderStatus');

const Order = db.define('orders', {
  name: {
    type: Sequelize.STRING
  },
  code: {
    type: Sequelize.STRING
  },
  buyer_id: {
    type: Sequelize.STRING
  },
  advertisements_id: {
    type: Sequelize.STRING
  },
  orderStatus_id: {
    type: Sequelize.STRING
  }
});

Order.belongsTo(User, { foreignKey: 'buyer_id' });
Order.belongsTo(Advertisement, { foreignKey: 'advertisements_id' });
Order.belongsTo(OrderStatus, { foreignKey: 'orderStatus_id' });

module.exports = Order;
