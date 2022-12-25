"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "States",
      [
        {
          id: 1,
          status: "active",
        },
        {
          id: 2,
          status: "disabled",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("States", null, {});
  },
};
