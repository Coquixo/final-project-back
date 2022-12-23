"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class States extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  States.init(
    {
      id_state: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
      },
      name_state: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [1, 50],
        },
      },
    },
    {
      sequelize,
      modelName: "States",
    }
  );
  return States;
};
