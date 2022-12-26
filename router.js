const express = require("express");
const router = express.Router();

const AuthRoutes = require("./routes/AuthRoutes");
const UserRoutes = require("./routes/UserRoutes");
const StateRoutes = require("./routes/StatesRoutes");
const RoleRoutes = require("./routes/RolesRoutes");
const CardRoutes = require("./routes/CardsRoutes");
// const WalletRoutes = require("./routes/WalletRoutes");
// const TransactionRoutes = require("./routes/TransactionRoutes");

router.use("/auth", AuthRoutes);
router.use("/user", UserRoutes);
router.use("/state", StateRoutes);
router.use("/role", RoleRoutes);
router.use("/card", CardRoutes);
// router.use("/wallet", WalletRoutes);
// router.use("/move", TransactionRoutes);

module.exports = router;
