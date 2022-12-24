const User = require("../models/users");

//AuthServices:
const { hashPassword, generateUserToken } = require("../services/authServices");

const UserController = {};

//Get all Users Data
UserController.getAllUsers = async (req, res) => {
  try {
    let user = await User.findAll();
    res.status(201).send({
      success: true,
      message: "Bringing all Users went successfully",
      data: user,
    });
  } catch (error) {
    res.status(501).sent({
      success: false,
      message: "Bringing all Users failed",
      error: error.message,
    });
  }
};

//Update User
UserController.updateUser = async (req, res) => {
  let data = req.body;
  try {
    let newPassword = hashPassword(data.password);
    let user = await User.update(
      {
        name: data.name,
        surname: data.surname,
        phone: data.phone,
        age: data.age,
        country: data.country,
        city: data.city,
        address: data.address,
        password: newPassword,
      },
      {
        where: { email: req.params.email },
      }
    );
    res.status(202).send({
      success: true,
      message: "User updated successfully",
      name: data.name,
      surname: data.surname,
      phone: data.phone,
      age: data.age,
      country: data.country,
      city: data.city,
      address: data.address,
      token: generateUserToken(user),
    });
  } catch (error) {
    res.status(401).send({
      message: "Something went wrong on updatingUser",
      error: error.message,
    });
  }
};

module.exports = UserController;
