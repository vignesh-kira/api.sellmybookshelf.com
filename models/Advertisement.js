const Sequelize = require('sequelize');
const db = require('../config/database');
const Class = require('../models/Class');
const Subject = require('../models/Subject');
const AdvertisementStatus = require('../models/AdvertisementStatus');

const Advertisement = db.define('advertisements', {
  title: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  book_title: {
    type: Sequelize.STRING
  },
  book_author: {
    type: Sequelize.STRING
  },
  condition_text: {
    type: Sequelize.STRING
  },
  condition_rating: {
    type: Sequelize.STRING
  },
  book_seller_price: {
    type: Sequelize.STRING
  },
  book_final_price: {
    type: Sequelize.STRING
  },
  history: {
    type: Sequelize.STRING
  },
  class_id: {
    type: Sequelize.STRING
  },
  user_id: {
    type: Sequelize.STRING
  },
  subject_id: {
    type: Sequelize.STRING
  },
  advertisementStatus_id: {
    type: Sequelize.STRING
  },
});

Advertisement.belongsTo(Class, { foreignKey: 'class_id' });
Advertisement.belongsTo(Subject, { foreignKey: 'subject_id' });
Advertisement.belongsTo(AdvertisementStatus, { foreignKey: 'advertisementStatus_id' });

module.exports = Advertisement;
