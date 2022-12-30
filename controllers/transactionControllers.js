const sequelize = require("../db/db");
const Transaction = require("../models/transactions");
const Wallet = require("../models/wallets");

const TransactionController = () => {};

TransactionController.getEveryTransaction = async (req, res) => {
  try {
    let transaction = await Transaction.findAll();

    res.status(201).send({
      success: true,
      message: "Bringing all transactions data successffully",
      data: transaction,
    });
  } catch (error) {
    res.status(501).send({
      success: false,
      message: "Something went wrong on getEveryTransaction",
      error: error.message,
    });
  }
};

//Find someones all transactions
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
      message: "Bringing users transactions data successffully",
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

//Creates a new transaction
TransactionController.createNewTransaction = async (req, res) => {
  let data = req.params;
  try {
    let transaction = await Transaction.create({
      sender_wallet: data.sender,
      addressee_wallet: data.addressee,
      quantity: data.ammount,
    });
    res.status(201).send({
      success: true,
      message: "Transaction created successffully",
      data: transaction,
    });
  } catch (error) {
    res.status(501).send({
      success: false,
      message: "Something went wrong on createNewTransaction",
      error: error.message,
    });
  }
};

TransactionController.executeNewTransaction = async (req, res) => {
  let data = req.params;
  try {
    const transaction = await sequelize.transaction(async (t) => {
      const senderData = parseInt(data.sender);
      const addresseeData = parseInt(data.addressee);
      const ammountData = parseInt(data.ammount);

      const transaction = await Transaction.create(
        {
          sender_wallet: senderData,
          addressee_wallet: addresseeData,
          quantity: ammountData,
        },
        { transaction: t }
      );

      console.log("LLEGA HASTA AQUI");

      const sender = await Wallet.findOne({
        where: {
          id: senderData,
        },
      });
      const addressee = await Wallet.findOne({
        where: {
          id: addresseeData,
        },
      });

      await sender.setShooter(
        {
          user_id: senderData,
          card_id: addresseeData,
          balance: sender.balance - ammountData,
        },
        { transaction: t }
      );
      await addressee.setShooter(
        {
          user_id: senderData,
          card_id: addresseeData,
          balance: addressee.balance + ammountData,
        },
        { transaction: t }
      );

      return transaction;
    });

    res.status(201).send({
      success: true,
      message: "Transaction made successffully",
      data: transaction,
    });
  } catch (error) {
    res.status(501).send({
      success: false,
      message: "Something went wrong on executeNewTransaction",
      // errorTotal: error,
      errorMensaje: error.message,
    });
  }
};

module.exports = TransactionController;
