const express = require("express");
const router = express.Router();

const AuthRoutes = require("./views/AuthsRoutes");
const UserRoutes = require("./views/UsersRoutes");
const WalletRoutes = require("./views/RolesRoutes");
const TransactionRoutes = require("./views/RolesRoutes");

router.use("/auth", AuthRoutes);
router.use("/user", UserRoutes);
router.use("/wallet", WalletRoutes);
router.use("/move", TransactionRoutes);

module.exports = router;
