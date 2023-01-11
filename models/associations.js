const Users = require("./users");
const States = require("./states");
const Roles = require("./roles");
const Wallets = require("./wallets");
const Cards = require("./cards");
const Transactions = require("./transactions");

//Relation 1 to N USERS => Wallets
Users.hasMany(Wallets);
Wallets.belongsTo(Users);

//Relation 1 to N Cards => Wallets

Cards.hasMany(Wallets);
Wallets.belongsTo(Cards);

//Relation 1 to 1 States => Users

States.hasOne(Users);
Users.belongsTo(States);

//Relation 1 to N Roles => Users

Roles.hasMany(Users);
Users.belongsTo(Roles);

//Relation 1 to N Users => Transactions

Wallets.hasMany(Transactions, { sourceKey: "id" });
Transactions.belongsTo(Wallets, {
  targetKey: "id",
  foreignKey: "sender_wallet",
  as: "sender",
});
Transactions.belongsTo(Wallets, {
  targetKey: "id",
  foreignKey: "addressee_wallet",
  as: "addressee",
});
