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

    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "Users",
        key: "id",
      },
    },
    card_id: {
      type: DataTypes.INTEGER,

      allowNull: false,
      references: {
        model: "Cards",
        key: "id",
      },
    },
    balance: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Wallets",
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Wallets;
