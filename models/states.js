"use strict";

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/db");
class States extends Model {}

States.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
    status: {
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
    modelName: "States",
    freezeTableName: true,
  }
);

module.exports = States;
