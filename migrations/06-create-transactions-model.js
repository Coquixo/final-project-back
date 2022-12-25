"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Transactions", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
      },
      sender: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "Users",
          key: "email",
        },
      },
      addressee: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "Users",
          key: "email",
        },
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          isNumeric: true,
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Transactions");
  },
};
