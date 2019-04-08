const Sequelize = require('sequelize');
const db = require('../config/database');

const Class = require('../models/Class');
const School = require('../models/School');
const Section = require('../models/Section');
const UserType = require('../models/UserType');

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

User.belongsTo(UserType, { foreignKey: 'user_type_id' });
User.belongsTo(School, { foreignKey: 'school_id' });
User.belongsTo(Class, { foreignKey: 'class_id' });
User.belongsTo(Section, { foreignKey: 'section_id' });

module.exports = User;
