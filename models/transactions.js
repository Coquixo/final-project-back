"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
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
  return Transactions;
};
