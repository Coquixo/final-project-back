const User = require("../models/users");

const UserController = {};

//Functions

//Controllers

UserController.updateUser = async (req, res) => {
  let data = req.body;
  try {
  } catch (error) {
    res.status(401).send({
      message: "Something went wrong on updatingUser",
      error: error.message,
    });
  }
};

module.exports = UserController;
