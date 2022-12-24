const User = require("../models/users");

//AuthServices:
const { hashPassword, generateUserToken } = require("../services/authServices");

const UserController = {};

//Update User
UserController.updateUser = async (req, res) => {
  let data = req.body;
  try {
    let newPassword = hashPassword(data.password);

    // passwordMatches(data.password, user.password)
    // if (!passwordMatches) {
    //     res.status(401).send({
    //       success: true,
    //       message: "Incorrect email or password",
    //       data: user.password,
    //       data2: password,
    //     });
    //   }

    //We trying to update only if you veryfied your password

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
