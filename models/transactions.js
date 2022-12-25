"use strict";
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/db");
class Transactions extends Model {}

Transactions.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
    sender: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "Users",
        key: "email",
      },
    },
    addressee: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "Users",
        key: "email",
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
  },
  {
    sequelize,
    modelName: "Transactions",
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Transactions;
