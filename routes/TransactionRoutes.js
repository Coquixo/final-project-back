const express = require("express");
const router = express.Router();

const TransactionController = require("../controllers/transactionControllers");
const { isAdmin } = require("../middlewares/authMiddlewares");

//Not Admin
//Get every transaction from User //Admin also can
router.get("/:user_id", TransactionController.getUserTransactions);

//Executes a new transaction
router.post(
  "/:sender/:addressee/:ammount",
  TransactionController.executeNewTransaction
);
//sender = sender wallets id
//addressee = addressee wallets id

//Admin
//Get All transactions from every User
router.get("/", isAdmin(), TransactionController.getEveryTransaction);

module.exports = router;
