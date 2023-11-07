const { Sequelize, DataTypes}  = require('sequelize');
const sequelize = require('../database/mysql.js');

// ...
 // Certifique-se de importar a instância correta do Sequelize

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,  
  },
  email:{
    type:DataTypes.STRING,
    unique:true
  },
  password:{
    type:DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  validated:{
    type:DataTypes.TINYINT,
    defaultValue:false
  },
  code:{
    type:DataTypes.INTEGER,
    unique:true
  },

  profilePicture: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},{tableName:"user"});







console.log('User model defined'); // Adicione este log
module.exports = User;
