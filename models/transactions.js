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
    sender_wallet: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Wallets",
        key: "id",
      },
    },
    addressee_wallet: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Wallets",
        key: "id",
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
    timestamps: { createdAt: true, updatedAt: false },
    freezeTableName: true,
  }
);

module.exports = Transactions;
