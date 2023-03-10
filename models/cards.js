"use strict";
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/db");
class Cards extends Model {}

Cards.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
    card: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1, 55],
      },
    },
  },
  {
    sequelize,
    modelName: "Cards",
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Cards;
