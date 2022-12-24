const Users = require("./users");
const States = require("./states");
const Roles = require("./roles");
const Wallets = require("./wallets");
const Cards = require("./cards");
const Transactions = require("./transactions");

//Relation 1 to N USERS => Wallets
Users.hasMany(Wallets);
Wallets.belongsTo(Users);

//Relation 1 to N Wallets => Cards

Wallets.hasMany(Cards);
Cards.belongsTo(Wallets);

//Relation 1 to 1 States => Users

States.hasOne(Users);
Users.belongsTo(States);

//Relation 1 to N Roles => Users

Roles.hasMany(Users);
Users.belongsTo(Roles);

//Relation 1 to N Users => Transactions

Users.hasMany(Transactions);
Transactions.belongsTo(Users);
