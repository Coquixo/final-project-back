const express = require("express");
const router = express.Router();

const AuthRoutes = require("./routes/AuthRoutes");
const UserRoutes = require("./routes/UserRoutes");
// const WalletRoutes = require("./routes/WalletRoutes");
// const TransactionRoutes = require("./routes/TransactionRoutes");

router.use("/auth", AuthRoutes);
router.use("/user", UserRoutes);
// router.use("/wallet", WalletRoutes);
// router.use("/move", TransactionRoutes);

module.exports = router;
