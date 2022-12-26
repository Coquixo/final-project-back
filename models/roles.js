"use strict";
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/db");
class Roles extends Model {}
Roles.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
    name: {
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
    modelName: "Roles",
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Roles;
