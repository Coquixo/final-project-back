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

const hashPassword = (password) => {
  return bcrypt.hashSync(password, Number.parseInt(AuthConfig.rounds || 10));
};

const AuthController = {};

//Sign In
AuthController.signIn = async (req, res) => {
  let data = req.body;
  try {
    let password = hashPassword(data.password);
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

AuthController.logIn = async (req, res) => {
  try {
    let data = req.body;
    const user = await User.findOne({ where: { email: data.email } });
    if (!user) {
      res.status(401).send({
        success: true,
        message: "There is no user registered with that credentials",
      });
    }
    const validPassword = await bcrypt.compareSync(
      data.password,
      user.password
    );
    if (!validPassword) {
      res.status(401).send({
        success: true,
        message: "Incorrect email or password",
        data: user.password,
        data2: password,
      });
    }

    res.status(202).send({
      success: true,
      message: "User logged successfully",
      id: user.id,
      email: user.email,
      name: user.name,
      surname: user.surname,
      phone: user.phone,
      age: user.age,
      country: user.country,
      city: user.city,
      address: user.address,
      wallet: user.wallet,
      token: generateUserToken(user),
    });
  } catch (error) {
    res.status(401).send({
      message: "Invalid email/password",
      error: error.message,
    });
  }
};

module.exports = AuthController;
