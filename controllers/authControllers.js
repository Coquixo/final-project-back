const User = require("../models/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const AuthConfig = require("../config/authConfig.js");

const generateUserToken = (user) => {
  return jwt.sign(
    {
      userEmail: user.email,
      role: user.role,
      state: user.state,
    },
    AuthConfig.secret,
    { expiresIn: AuthConfig.expires }
  );
};

const AuthController = {};

//Sign In
AuthController.signIn = async (req, res) => {
  let data = req.body;
  try {
    let password = bcrypt.hashSync(
      data.password,
      Number.parseInt(AuthConfig.rounds || 10)
    );
    let user = await User.create({
      name: data.name,
      age: data.age,
      email: data.email,
      password: password,
      state: 1,
      role: 1,
    });

    res.status(201).send({
      success: true,
      message: "User created successfully",
      token: generateUserToken(user),
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "ERROR: User could not be created",
      error: error.message,
    });
  }
};

//Log In

// AuthController.logIn = async (req, res) => {};

module.exports = AuthController;
