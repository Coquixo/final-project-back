"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {}
  Users.init(
    {
      id_user: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true,
        validate: {
          len: [1, 50],
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [8, 255],
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 25],
        },
      },
      surname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 25],
        },
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1, 25],
        },
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          len: [1, 4],
        },
      },
      country: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1, 25],
        },
      },
      city: {
        allowNull: true,
        validate: {
          len: [1, 25],
        },
      },
      address: {
        allowNull: true,
        validate: {
          len: [1, 55],
        },
      },
      state: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "States",
          key: "id_state",
        },
      },
      role: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Roles",
          key: "id_role",
        },
      },
      wallet: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Wallets",
          key: "id_wallet",
        },
      },
    },

    {
      sequelize,
      modelName: "Users",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Users;
};
