// const express = require("express");
// const router = express.Router();

// const WalletController = require("../controllers/walletController");

// //NoAdmin
// //Get Balance from a wallet //Admin also can (other Wallet)
// router.get("/:id_wallet/:email", WalletController.getWalletBalance);
// //Create a new Wallet Account with card selected
// router.post(
//   "/:id_wallet/:email/:card/create",
//   WalletController.createNewWallet
// );
// //Insert money on a wallet //Admin also can (other Wallet)
// router.put(
//   "/:id_wallet/:email/:card/:ammount/addMoney",
//   WalletController.addMoneyInWallet
// );
// //Withdraw money from a wallet //Admin also can(other Wallet)
// router.put(
//   "/:id_wallet/:email/:card/:ammount/withdrawMoney",
//   WalletController.withdrawMoneyFromWallet
// );

// module.exports = router;
