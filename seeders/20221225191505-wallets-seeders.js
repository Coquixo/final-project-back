"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Wallets",
      [
        {
          id: 1,
          UserId: 1,
          CardId: 1,
          balance: 2555,
        },
        {
          id: 2,
          UserId: 1,
          CardId: 1,
          balance: 20,
        },
        {
          id: 3,
          UserId: 2,
          CardId: 1,
          balance: 500,
        },
        {
          id: 4,
          UserId: 3,
          CardId: 1,
          balance: 10000,
        },
        {
          id: 5,
          UserId: 4,
          CardId: 1,
          balance: 9750,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Wallets", null, {});
  },
};
