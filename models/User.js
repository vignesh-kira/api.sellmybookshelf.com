const Sequelize = require('sequelize');
const db = require('../config/database');

const User = db.define('user', {
  fullname: {
    type: Sequelize.STRING
  },
  firstname: {
    type: Sequelize.STRING
  },
  lastname: {
    type: Sequelize.STRING
  },
  bazaar_name: {
    type: Sequelize.STRING
  },
  bazaar_rating: {
    type: Sequelize.STRING
  },
  bazaar_books_sold: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  about: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  school_id: {
    type: Sequelize.STRING
  },
  user_type_id: {
    type: Sequelize.STRING
  },
  class_id: {
    type: Sequelize.STRING
  },
  section_id: {
    type: Sequelize.STRING
  }
},{
  defaultScope: {
    attributes: { exclude: ['password'] }
  }
});

module.exports = User;
