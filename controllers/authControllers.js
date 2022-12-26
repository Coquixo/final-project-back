const User = require("../models/users");
const {
  assertIsUniqueEmail,
  assertIsValidPassword,
  assertIsValidEmail,
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
    // await assertIsUniqueEmail(data.email);

    console.log(assertIsValidPassword(data.password));
    console.log(assertIsValidEmail(data.email));
    // console.log(assertIsUniqueEmail(data.email));

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
    passwordMatches(data.password, user.password);

    if (!passwordMatches) {
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
