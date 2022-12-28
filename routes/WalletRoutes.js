const express = require("express");
const router = express.Router();

const WalletController = require("../controllers/walletControllers");

//NoAdmin
//Get Balance from a wallet //Admin also can (other Wallet)
router.get("/:user/:card", WalletController.getWalletBalance);
//Create a new Wallet Account with card selected
router.post("/:user/:card", WalletController.createNewWallet);
//Insert or withdraw money in or from a wallet
//id= wallet's id
//ammount= quantity of money you want to insert or withdraw
//action= add / withdraw
router.put(
  "/:id/:ammount/:action",
  WalletController.addOrWithdrawMoneyInWallet
);

module.exports = router;
