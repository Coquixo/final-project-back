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
    WalletId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Wallets",
        key: "id",
      },
      field: "sender_wallet",
    },
    WalletId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Wallets",
        key: "id",
      },
      field: "addressee_wallet",
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
    createdAt: true,
    updatedAt: false,
    freezeTableName: true,
    underscored: false,
  }
);

module.exports = Transactions;
