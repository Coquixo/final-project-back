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
    let searchUser = await User.findOne({
      where: { email: req.params.email },
    });

    let newPassword = searchUser.password;
    if (data.password) {
      newPassword = await hashPassword(data.password);
    }
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

//Delete My account

UserController.deleteUser = async (req, res) => {
  try {
    let data = req.params;
    let response = await User.destroy({
      where: { email: data.email },
    });

    if (response) {
      res.status(201).send({
        success: true,
        message: "User has been deleted",
      });
    }
    if (!response) {
      res.status(201).send({
        success: true,
        message: "User hasn't been deleted",
      });
    }
  } catch (error) {
    res.status(501).send({
      success: false,
      message: "Something went wrong on Deleting User",
      error: error.message,
    });
  }
};

//Admin: Check user Status
UserController.checkUserStatus = async (req, res) => {
  try {
    let target = req.params.email;
    let user = await User.findByPk(target);

    res.status(201).send({
      success: true,
      message: "Bringing User State Successffully",
      email: user.email,
      StateId: user.StateId,
    });
  } catch (error) {
    res.status(501).send({
      success: false,
      message: "Something went wrong on checking someones user State",
      error: error.message,
    });
  }
};

//Admmin: Change a user Status

UserController.changeUserStatus = async (req, res) => {
  try {
    let target = req.params.email;
    let newStatus = req.body.state;
    await User.update(
      {
        StateId: newStatus,
      },
      { where: { email: target } }
    );

    res.status(201).send({
      success: true,
      message: `${target} status changed to ${newStatus}`,
    });
  } catch (error) {
    res.status(501).send({
      success: false,
      message: "Something went wrong on udpdating someones user State",
      error: error.message,
    });
  }
};

module.exports = UserController;
