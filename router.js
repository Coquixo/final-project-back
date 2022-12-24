const express = require("express");
const router = express.Router();

const AuthRoutes = require("./views/AuthRoutes");
const UserRoutes = require("./views/UserRoutes");
const WalletRoutes = require("./views/WalletRoutes");
const TransactionRoutes = require("./views/TransactionRoutes");

router.use("/auth", AuthRoutes);
router.use("/user", UserRoutes);
router.use("/wallet", WalletRoutes);
router.use("/move", TransactionRoutes);

module.exports = router;
