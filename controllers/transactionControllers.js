const sequelize = require("../db/db");
const Transaction = require("../models/transactions");
const Wallet = require("../models/wallets");
const User = require("../models/users");

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

//Executes a new transaction
// TransactionController.executeNewTransaction = async (req, res) => {
//   let data = req.params;
//   try {
//     const transaction = await sequelize.transaction(async (t) => {
//       const senderData = parseInt(data.sender);
//       const addresseeData = parseInt(data.addressee);
//       const ammountData = parseInt(data.ammount);

//       await Wallet.decrement(
//         { balance: ammountData },
//         {
//           where: { id: senderData },
//         },
//         { transaction: t }
//       );
//       await Wallet.increment(
//         { balance: ammountData },
//         { where: { id: addresseeData } },
//         { transaction: t }
//       );

//       const transaction = await Transaction.create(
//         {
//           WalletId: 0,
//           sender_wallet: senderData,
//           addressee_wallet: addresseeData,
//           quantity: ammountData,
//         },
//         { transaction: t }
//       );
//       return transaction;
//     });

//     res.status(201).send({
//       success: true,
//       message: "Transaction made successffully",
//       data: transaction,
//     });
//   } catch (error) {
//     res.status(501).send({
//       success: false,
//       message: "Something went wrong on executeNewTransaction",
//       error: error.message,
//     });
//   }
// };

TransactionController.executeNewTransactionByEmail = async (req, res) => {
  const data = req.params;
  const emailSender = data.sender;
  const emailAddressee = data.addressee;

  try {
    let userSender = await User.findOne({ where: { email: emailSender } });
    let userAddressee = await User.findOne({
      where: { email: emailAddressee },
    });

    let walletSender = await Wallet.findOne({
      where: { UserId: userSender.dataValues.id, CardId: 1 },
    });
    let walletAddressee = await Wallet.findOne({
      where: { UserId: userAddressee.dataValues.id, CardId: 1 },
    });
    const transaction = await sequelize.transaction(async (t) => {
      let senderData = walletSender.dataValues.id;
      let addresseeData = walletAddressee.dataValues.id;
      const ammountData = parseInt(data.ammount);

      await Wallet.decrement(
        { balance: ammountData },
        {
          where: { id: senderData },
        },
        { transaction: t }
      );
      await Wallet.increment(
        { balance: ammountData },
        { where: { id: addresseeData } },
        { transaction: t }
      );

      const transaction = await Transaction.create(
        {
          WalletId: 0,
          sender_wallet: senderData,
          addressee_wallet: addresseeData,
          quantity: ammountData,
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
      message: "Something went wrong on executeNewTransactionByEmail",
      error: error.message,
    });
  }
};

module.exports = TransactionController;
