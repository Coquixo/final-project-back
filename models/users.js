"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init(
    {
      id_user: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        autoIncrement: true,
        allowNull: false,
      },
      user_email: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true,
        validate: {
          len: [1, 50],
          isEmail: true,
        },
      },
      user_password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [8, 255],
        },
      },
      name_user: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 25],
        },
      },
      surname_user: {
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
          model: "states",
          key: "id_state",
        },
      },
      role: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "roles",
          key: "id_role",
        },
      },
      wallet: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "wallets",
          key: "id_wallet",
        },
      },
    },

    {
      sequelize,
      modelName: "users",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Users;
};
