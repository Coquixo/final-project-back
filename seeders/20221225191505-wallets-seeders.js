"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Wallets",
      [
        {
          id: 1,
          user_email: "coquixo98@gmail.com",
          card_id: 1,
          balance: 2555,
        },
        {
          id: 2,
          user_email: "coquixo98@gmail.com",
          card_id: 2,
          balance: 20,
        },
        {
          id: 3,
          user_email: "coquixo99@gmail.com",
          card_id: 1,
          balance: 500,
        },
        {
          id: 4,
          user_email: "coquixo100@gmail.com",
          card_id: 2,
          balance: 10000,
        },
        {
          id: 5,
          user_email: "coquixo101@gmail.com",
          card_id: 2,
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
