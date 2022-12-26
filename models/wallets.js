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

    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "Users",
        key: "email",
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
