const Sequelize = require('sequelize');
const dotenv = require("dotenv")
dotenv.config()

module.exports = new Sequelize(
     process.env.MYSQL_DB,
     process.env.MYSQL_USER,
     process.env.MYSQL_PASSWORD, {
         dialect:'mysql',
         port:parseInt(process.env.MYSQL_PORT) 
     }
);