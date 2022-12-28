const AuthConfig = require("../config/authConfig.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//Generate Token
const generateUserToken = (user) => {
  return jwt.sign(
    {
      email: user.email,
      role: user.role,
      state: user.state,
    },
    AuthConfig.secret,
    { expiresIn: AuthConfig.expires }
  );
};

//Hash a Password
const hashPassword = (password) => {
  return bcrypt.hashSync(password, Number.parseInt(AuthConfig.rounds || 10));
};

//Check if Password Matches
const passwordMatches = async (password, savedPassword) => {
  return await bcrypt.compareSync(password, savedPassword);
};

module.exports = { generateUserToken, hashPassword, passwordMatches };
