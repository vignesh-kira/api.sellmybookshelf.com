const Sequelize = require('sequelize');

const {
  DATABASE,
  USERNAME,
  PASSWORD,
  HOST
} = process.env;

module.exports =  new Sequelize(DATABASE, USERNAME, PASSWORD, {
  host: HOST,
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});
