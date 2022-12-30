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
          password:
            "$2b$10$5cqMXu1TMM.EcpPvY9nxr.rUahUfMVeQJeWOpe4igMfY52KiO0zTu",
          name: "Alex",
          surname: "Lopez",
          phone: "666999333",
          age: 24,
          country: "Spain",
          city: "Palma",
          address: "Calle ejemplo numero 100",
          StateId: 1,
          RoleId: 1,
        },
        {
          id: 2,
          email: "coquixo99@gmail.com",
          password:
            "$2b$10$5cqMXu1TMM.EcpPvY9nxr.rUahUfMVeQJeWOpe4igMfY52KiO0zTu",
          name: "Marcelo",
          surname: "Quiroga",
          phone: "666999333",
          age: 24,
          country: "Spain",
          city: "Palma",
          address: "Calle ejemplo numero 100",
          StateId: 1,
          RoleId: 1,
        },
        {
          id: 3,
          email: "coquixo100@gmail.com",
          password:
            "$2b$10$5cqMXu1TMM.EcpPvY9nxr.rUahUfMVeQJeWOpe4igMfY52KiO0zTu",
          name: "Alex",
          surname: "Lopez",
          phone: "666999333",
          age: 24,
          country: "Spain",
          city: "Palma",
          address: "Calle ejemplo numero 100",
          StateId: 1,
          RoleId: 2,
        },
        {
          id: 4,
          email: "coquixo101@gmail.com",
          password:
            "$2b$10$5cqMXu1TMM.EcpPvY9nxr.rUahUfMVeQJeWOpe4igMfY52KiO0zTu",
          name: "Alex",
          surname: "Lopez",
          phone: "666999333",
          age: 24,
          country: "Spain",
          city: "Palma",
          address: "Calle ejemplo numero 100",
          StateId: 2,
          RoleId: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
