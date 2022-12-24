const User = require("../models/users");
const { hashPassword, generateUserToken } = require("../services/authServices");

const UserController = {};

//Functions

//Controllers

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
