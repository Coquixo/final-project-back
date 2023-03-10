const Wallets = require("../models/wallets");
const { checkAction } = require("../services/walletServices");
const WalletsController = {};

// Get Balance from a Wallet

WalletsController.getWalletBalance = async (req, res) => {
  let data = req.params;
  try {
    let wallet = await Wallets.findOne({
      where: { UserId: data.user, CardId: data.card },
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

WalletsController.createNewWallet = async (req, res) => {
  let data = req.params;
  try {
    let wallet = await Wallets.create({
      UserId: data.user,
      CardId: data.card,
      balance: 0,
    });

    res.status(201).send({
      success: true,
      meessage: "Created a wallet successfully",
      data: wallet,
    });
  } catch (error) {
    res.status(501).send({
      success: false,
      message: "Something went wrog on createNewWallet",
      error: error.message,
    });
  }
};

WalletsController.addOrWithdrawMoneyInWallet = async (req, res) => {
  let data = req.params;
  try {
    let action = data.action;
    let newAction = await checkAction(action.toString().toLowerCase());
    if (newAction == true) {
      let wallet = await Wallets.increment(
        {
          balance: data.ammount,
        },
        { where: { id: data.id } }
      );
    }
    if (newAction == false) {
      let wallet = await Wallets.decrement(
        {
          balance: data.ammount,
        },
        { where: { id: data.id } }
      );
    }

    res.status(201).send({
      success: true,
      message: "Balance updated successffully",
      data: `${data.ammount} was changed`,
    });
  } catch (error) {
    res.status(501).send({
      success: false,
      message: "Something went wrong in addMoneyInWallet",
      error: error.meessage,
    });
  }
};

module.exports = WalletsController;
