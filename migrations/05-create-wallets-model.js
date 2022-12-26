"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Wallets", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
      },
      balance: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      user_email: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "Users",
          key: "email",
        },
      },
      card_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          len: [1, 55],
        },
        references: {
          model: "Cards",
          key: "id",
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Wallets");
  },
};
