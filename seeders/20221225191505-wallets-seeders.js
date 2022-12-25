"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Wallets",
      [
        {
          id: 1,
          balance: 2555,
          card_id: 1,
        },
        {
          id: 2,
          balance: 2555,
          card_id: 2,
        },
        {
          id: 3,
          balance: 2555,
          card_id: 1,
        },
        {
          id: 4,
          balance: 2555,
          card_id: 2,
        },
        {
          id: 5,
          balance: 2555,
          card_id: 2,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Wallets", null, {});
  },
};
