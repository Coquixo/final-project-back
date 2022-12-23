"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Wallets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Wallets.init(
    {
      id_wallet: {
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
          key: "id_card",
        },
      },
    },
    {
      sequelize,
      modelName: "Wallets",
    }
  );
  return Wallets;
};
