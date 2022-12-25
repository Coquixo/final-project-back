"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Wallets",
      [
        {
          id: 1,
          user_id: 1,
          card_id: 1,
          balance: 2555,
        },
        {
          id: 2,
          user_id: 1,
          card_id: 2,
          balance: 2555,
        },
        {
          id: 3,
          user_id: 2,
          card_id: 1,
          balance: 2555,
        },
        {
          id: 4,
          user_id: 3,
          card_id: 2,
          balance: 2555,
        },
        {
          id: 5,
          user_id: 4,
          card_id: 2,
          balance: 2555,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Wallets", null, {});
  },
};
