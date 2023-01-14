const express = require("express");
const router = express.Router();

const TransactionController = require("../controllers/transactionControllers");
const {
  isAdmin,
  isSameUser,
  isMyWallet,
} = require("../middlewares/authMiddlewares");

//Not Admin
//Get every transaction from User //Admin also can
router.get(
  "/:user_id",
  isSameUser(),
  TransactionController.getUserTransactions
);

// Executes a new transaction inseting User's id
//sender = sender wallets id
//addressee = addressee wallets id
router.post(
  "/:sender/:addressee/:ammount",
  isMyWallet(),
  TransactionController.executeNewTransaction
);

//Executes a new transaction inserting email
//sender = sender wallets email
//addressee = addressee wallets email
router.post(
  "/:sender/:addressee/:ammount/email",
  TransactionController.executeNewTransactionByEmail
);

//Admin
//Get All transactions from every User
router.get("/", isAdmin(), TransactionController.getEveryTransaction);

module.exports = router;
