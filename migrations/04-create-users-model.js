"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [1, 50],
          isEmail: true,
        },
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [8, 255],
        },
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [1, 25],
        },
      },
      surname: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          len: [1, 25],
        },
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          len: [1, 25],
        },
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: true,
        validate: {
          len: [1, 4],
        },
      },
      country: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          len: [1, 25],
        },
      },
      city: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          len: [1, 25],
        },
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          len: [1, 55],
        },
      },
      StateId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "States",
          key: "id",
        },
      },
      RoleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Roles",
          key: "id",
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
