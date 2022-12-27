const Wallets = require("../models/wallets");
const WalletsController = {};

// Get Balance from a Wallet

WalletsController.getWalletBalance = async (req, res) => {
  let data = req.params;
  try {
    let wallet = await Wallets.findOne({
      where: { user_id: data.id, card_id: data.card },
    });

    const { user_id, card_id, balance } = wallet;

    res.status(201).send({
      success: true,
      message: "Bringing wallet data successffully",
      data: {
        email: user_id,
        card: card_id,
        balance: balance,
      },
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
