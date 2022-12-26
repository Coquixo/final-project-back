const Users = require("../models/users");

const assertIsValidPassword = (password) => {
  //   Check if empty password
  if (password === "") {
    return "Please, introduce a password";
  }
  //   Check password's length
  if (password.length < 8) {
    return "Password must be at least 8 characters long";
  }
  // Check if password has 1 lower case letter
  if (!password.match(/[a-z]/)) {
    return "Password must contain at least one lower case letter";
  }
  // Check if password has 1 upper case letter
  if (!password.match(/[A-Z]/)) {
    return "Password must contain at least one upper case letter";
  }
  // Check if password has 1 numer minimun
  if (!password.match(/[0-9]/)) {
    return "Password must contain at least one number";
  }
  return true;
};

const assertIsValidEmail = (email) => {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValid = email.match(emailRegex);
  if (!isValid) {
    return "No valid email format. example@gmail.com";
  }
  return true;
};

const assertIsUniqueEmail = async (email) => {
  const user = await Users.findOne({
    where: { email: email },
  });
  if (user) {
    return "This email is already in use.";
  }
  return true;
};

const assertIsAdmin = (user) => {};

module.exports = {
  assertIsValidPassword,
  assertIsValidEmail,
  assertIsUniqueEmail,
  assertIsAdmin,
};
