const express = require("express");
const router = express.Router();

const TransactionController = require("../controllers/transactionControllers");
const { isAdmin, isSameUser } = require("../middlewares/authMiddlewares");

//Not Admin
//Get every transaction from User //Admin also can
router.get("/:user_id", TransactionController.getUserTransactions);
//Send money from User1 to User2
//When we send money we launch add/withdraw money from wallet controllers and create a new transaction.

//Create a new transaction
// router.post(
//   "/:sender/:addressee/:ammount",
//   TransactionController.createNewTransaction
// );

router.post(
  "/:sender/:addressee/:ammount",
  TransactionController.executeNewTransaction
);
//Admin
//Get All transactions from every User
router.get("/", isAdmin(), TransactionController.getEveryTransaction);

module.exports = router;
