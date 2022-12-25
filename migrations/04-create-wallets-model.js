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
      balance_wallet: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      card_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
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
