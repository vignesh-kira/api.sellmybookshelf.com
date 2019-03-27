const Sequelize = require('sequelize');
const db = require('../config/database');

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
  class_id: {
    type: Sequelize.STRING
  },
  user_id: {
    type: Sequelize.STRING
  },
});

module.exports = Advertisement;
