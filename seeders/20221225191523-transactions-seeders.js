"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Transactions",
      [
        {
          id: 1,
          sender_wallet: "1",
          addressee_wallet: "2",
          quantity: 550,
          createdAt: "2022-12-25 22:57:00",
        },
        {
          id: 2,
          sender_wallet: "2",
          addressee_wallet: "3",
          quantity: 13,
          createdAt: "2022-12-25 22:57:00",
        },
        {
          id: 3,
          sender_wallet: "3",
          addressee_wallet: "1",
          quantity: 987,
          createdAt: "2022-12-25 22:57:00",
        },
        {
          id: 4,
          sender_wallet: "4",
          addressee_wallet: "3",
          quantity: 213,
          createdAt: "2022-12-25 22:57:00",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Transactions", null, {});
  },
};
