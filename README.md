# Mjölnir Capital

---

---

## General Information

> <h6>This project is the BackEnd part from a ReactJs made Bank page webside.</h6>
> <p>API's theme is the chance to create a user, it's wallets and make transactions between those.</p>

---

## Table of content

- [API REST](#mjölnir-capital)
- [General Information](#general-information)
- [Relations](#relations)
- [Environment Install](#environment-install)
- [Endpoints](#endpoints-list)
- [Technologies](#technologies-dependencies-and-libraries)
- [Environment Install](#environment-install)
- [Authors](#authors)
- [Badges](#badges)

---

### Relations

![img](/images/Database.png)

---

### Environment Install

> Steps:

- In order to start the project in our device we have to copy this link: "https://github.com/Coquixo/final-project-back.git"
- Then open our IDE console, insert "git clone" then paste the link and enter.
- Don't forget to work in the correct directory

- Install dependencies in terminal with command: _npm i_

- Project is uploaded on production, if it's close you can create a new container and use enviorment variables.
  (Create a file .env where you going to get your db enviorment variables or change config.js with the variables):

_env example_

> (DB CONFIG)
> NODE_ENV=development
> DB_USERNAME=root
> DB_PASSWORD=root
> DB_DATABASE=backendDatabase
> DB_HOST=127.0.0.1
> DB_PORT=33060
> DB_DIALECT=mysql
> (AUTH CONFIG)
> AUTH_SECRET = thatsfinalsbackendproject
> AUTH_EXPIRES = 8h
> AUTH_ROUNDS = 10

- Migrate tables and seeders with next commands if they ain't launched:

(npx sequelize-cli db:migrate)
(npx sequelize db:seed:all)

- Run the conection to the database with:
  (npm run dev)

- Open Postam in order to insert next Endpoints.
  Don't forget that some enpoints require token when login in order to work.

---

### ENDPOINTS LIST

**Host example:**

http://localhost:5000/

**Routes:**

http://localhost:5000/auth

http://localhost:5000/user

http://localhost:5000/state

http://localhost:5000/role

http://localhost:5000/card

http://localhost:5000/wallet

http://localhost:5000/move

**Auth:**

LogIn(POST):

http://localhost:5000/auth/login

SignIn(POST):

http://localhost:5000/auth/signin

**User:**

Update my profile(PUT):

http://localhost:5000/user/:email/update

Delete my profile(DELETE):

http://localhost:5000/user/:email/delete

Get all users(GET):

http://localhost:5000/user/all

Get users status(GET)(admin):

http://localhost:5000/user/:email/status

Update users status(PUT)(admin):

http://localhost:5000/user/:email/status

**Wallet:**

Get balance from a wallet(GET)

http://localhost:5000/wallet/:user/:card

Create a new wallet with balance 0(POST)

http://localhost:5000/wallet/:user/:card

ADD or WITHDRAW money in a wallet(PUT)

http://localhost:5000/wallet/:id/:ammount/:action

id: wallet's id

ammount: quantity

action: add / withdraw

**Transaction:**

Get all trasactions data(GET)(ADMIN):

http://localhost:5000/transaction

Get all transactions data from a user(GET):

http://localhost:5000/transaction/:user_id

Create a new transaction(POST):

http://localhost:5000/transaction/:sender/:addressee/:ammount

sender: sender walled id

addressee: addressee wallet id

ammount: quantity(integer)

**States:**

Get all data(GET)

http://localhost:5000/state

**Roles:**

Get all data(GET)

http://localhost:5000/role

**Cards:**

Get all data(GET)

http://localhost:5000/card

### Technologies, dependencies and libraries

- [JavaScript](https://www.javascript.com/)
- [Node](https://nodejs.org/en/)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [Sequelize-cli](https://www.npmjs.com/package/sequelize-cli)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [MySQL](https://www.mysql.com/)
- [Docker](https://www.docker.com/)

---

### Authors

> **Alex Marcelo López Quiroga**

> [Github](https://github.com/Coquixo)🚀
> [LinkedIn](https://www.linkedin.com/in/alex-marcelo-lopez-quiroga5555/)🍀

---

### Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

---

[Back to top](#appendix)
