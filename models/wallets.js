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
    balance_wallet: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    card_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
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
