const  {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../database/mysql.js');
const User = require('./User.js');

const Pet = sequelize.define('Pet', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  species: {
    type: DataTypes.STRING,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

console.log('Pet model defined');
module.exports = Pet;

