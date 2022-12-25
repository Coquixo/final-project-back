"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: 1,
          email: "coquixo98@gmail.com",
          password: 1234,
          name: "Alex",
          surname: "Lopez",
          phone: "666999333",
          age: 24,
          country: "Spain",
          city: "Palma",
          address: "Calle ejemplo numero 100",
          state: 1,
          role: 1,
        },
        {
          id: 2,
          email: "coquixo99@gmail.com",
          password: 1234,
          name: "Marcelo",
          surname: "Quiroga",
          phone: "666999333",
          age: 24,
          country: "Spain",
          city: "Palma",
          address: "Calle ejemplo numero 100",
          state: 1,
          role: 1,
        },
        {
          id: 3,
          email: "coquixo100@gmail.com",
          password: 1234,
          name: "Alex",
          surname: "Lopez",
          phone: "666999333",
          age: 24,
          country: "Spain",
          city: "Palma",
          address: "Calle ejemplo numero 100",
          state: 1,
          role: 2,
        },
        {
          id: 4,
          email: "coquixo101@gmail.com",
          password: 1234,
          name: "Alex",
          surname: "Lopez",
          phone: "666999333",
          age: 24,
          country: "Spain",
          city: "Palma",
          address: "Calle ejemplo numero 100",
          state: 2,
          role: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
