"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Transactions",
      [
        {
          id: 1,
          sender: "coquixo98@gmail.com",
          addressee: "coquixo100@gmail.com",
          quantity: 550,
          createdAt: "2022-12-25 22:57:00",
        },
        {
          id: 2,
          sender: "coquixo100@gmail.com",
          addressee: "coquixo99@gmail.com",
          quantity: 13,
          createdAt: "2022-12-25 22:57:00",
        },
        {
          id: 3,
          sender: "coquixo98@gmail.com",
          addressee: "coquixo99@gmail.com",
          quantity: 987,
          createdAt: "2022-12-25 22:57:00",
        },
        {
          id: 4,
          sender: "coquixo101@gmail.com",
          addressee: "coquixo98@gmail.com",
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
