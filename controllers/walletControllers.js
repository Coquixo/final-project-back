const Wallets = require("../models/wallets");
const WalletsController = {};

// Get Balance from a Wallet

WalletsController.getWalletBalance = async (req, res) => {
  let data = req.params;
  try {
    let wallet = await Wallets.findOne({
      where: { user_email: data.email, card_id: data.card },
    });

    res.status(201).send({
      success: true,
      message: "Bringing wallet data successffully",
      data: wallet,
    });
  } catch (error) {
    res.status(501).send({
      success: false,
      message: "Something went wrong on getWalletBalance",
      error: error.message,
    });
  }
};

module.exports = WalletsController;
