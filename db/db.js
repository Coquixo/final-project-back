const config = require("../config/config.json");
const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_DATABASE || config.development.database,
  process.env.DB_USERNAME || config.development.username,
  process.env.DB_PASSWORD || config.development.password,

  {
    host: process.env.DB_HOST || config.development.host,
    port: process.env.DB_PORT || config.development.port,
    dialect: process.env.DB_DIALECT || config.development.dialect,
  }
);

module.exports = sequelize;
