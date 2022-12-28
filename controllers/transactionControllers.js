const Transaction = require("../models/transactions");

const TransactionController = () => {};

TransactionController.getUserTransactions = async (req, res) => {
  try {
    let data = req.params;
    let transaction = await Transaction.findAll({
      where: {
        sender_wallet: data.user_id,
      },
    });
    res.status(201).send({
      success: true,
      message: "Bringing transaction data successffully",
      data: transaction,
    });
  } catch (error) {
    res.status(501).send({
      success: false,
      message: "Something went wrong on getUserTransactions",
      error: error.message,
    });
  }
};

module.exports = TransactionController;
