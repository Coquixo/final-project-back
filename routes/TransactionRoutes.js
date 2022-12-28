const express = require("express");
const router = express.Router();

const TransactionController = require("../controllers/transactionControllers");

//Not Admin
//Get every transaction from User //Admin also can
router.get("/:user_id", TransactionController.getUserTransactions);
//Send money from User1 to User2
// router.post("/moves/:email/:email/send", TransactionController.sendMoney);

//Create a new transaction
router.post(
  "/:sender/:addressee/:ammount",
  TransactionController.createNewTransaction
);

//Admin
//Get All transactions from every User
router.get("/", TransactionController.getEveryTransaction);

module.exports = router;
