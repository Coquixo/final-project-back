"use strict";
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/db");
class Wallets extends Model {}
Wallets.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
    balance: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    card_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 55],
      },
      references: {
        model: "Cards",
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "Wallets",
    freezeTableName: true,
  }
);

module.exports = Wallets;
