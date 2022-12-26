const User = require("../models/users");
const {
  assertIsValidPassword,
  assertIsValidEmail,
  assertEmailIsUnique,
} = require("../services/errorManage");

//AuthServices:
const {
  generateUserToken,
  hashPassword,
  passwordMatches,
} = require("../services/authServices");

const AuthController = {};
//Sign In
AuthController.signIn = async (req, res) => {
  let data = req.body;
  try {
    await assertIsValidPassword(data.password);
    await assertIsValidEmail(data.email);
    await assertEmailIsUnique(data.email);

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
  let data = req.body;
  try {
    await assertIsValidPassword(data.password);
    await assertIsValidEmail(data.email);

    const user = await User.findOne({ where: { email: data.email } });
    let passMatch = await passwordMatches(data.password, user.password);
    if (!user) {
      throw new Error("There is no user registered with that credentials");
    }
    if (!passMatch) {
      throw new Error("Incorrect email or password");
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
    res.status(501).send({
      success: false,
      message: "Something went wrong on LogIn",
      error: error.message,
    });
  }
};

module.exports = AuthController;
