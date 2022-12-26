const Users = require("../models/users");

const assertIsValidPassword = (password) => {
  //   Check if empty password
  if (password === "") {
    throw new Error("Please, introduce a password");
  }
  //   Check password's length
  if (password.length < 8) {
    throw new Error("Password must be at least 8 characters long");
  }
  // Check if password has 1 lower case letter
  if (!password.match(/[a-z]/)) {
    throw new Error("Password must contain at least one lower case letter");
  }
  // Check if password has 1 upper case letter
  if (!password.match(/[A-Z]/)) {
    throw new Error("Password must contain at least one upper case letter");
  }
  // Check if password has 1 numer minimun
  if (!password.match(/[0-9]/)) {
    throw new Error("Password must contain at least one number");
  }
  return true;
};

const assertIsValidEmail = (email) => {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValid = email.match(emailRegex);
  if (!isValid) {
    throw new Error("No valid email format. example@gmail.com");
  }
  return true;
};

const assertEmailIsUnique = async (email) => {
  // validate email is unique
  const user = await Users.findOne({
    where: { email: email },
  });
  if (user) {
    throw new Error("Email is already registered");
  }
};

const assertIsAdmin = (user) => {};

module.exports = {
  assertIsValidPassword,
  assertIsValidEmail,
  assertEmailIsUnique,
  assertIsAdmin,
};
