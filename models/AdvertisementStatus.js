const Sequelize = require('sequelize');
const db = require('../config/database');

const AdvertisementStatus = db.define('advertisementStatuses', {
  name: {
    type: Sequelize.STRING
  },
  code: {
    type: Sequelize.STRING
  }
});

module.exports = AdvertisementStatus;
