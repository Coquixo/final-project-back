const getTokenValues = (auth) => {
  const token = auth.substring(7, auth.lenght);

  function parseJwt(token) {
    return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
  }
  return parseJwt(token);
};

const isSameUser = () => async (req, res, next) => {
  let auth = req.headers.authorization;
  let inputEmail = req.params.email;
  let tokenData = getTokenValues(auth);
  try {
    if (tokenData.role === 1) {
      return next();
    }
    console.log(tokenData.role);

    if (inputEmail !== tokenData.email) {
      throw new Error("You have no access, that's not your profile");
    }
    return next();
  } catch (error) {
    res.status(403).json({
      success: false,
      message: "Something went wrong isSameUSer",
      error: error.message,
    });
  }
};

const isAdmin = () => async (req, res, next) => {
  let auth = req.headers.authorization;
  let tokenData = getTokenValues(auth);

  if (tokenData.role === 2) {
    res.status(403).json({ message: "You have no access to do that" });
  }
  return next();
};

const statusCheck = () => {
  let auth = req.headers.authorization;
  let tokenData = getTokenValues(auth);
  try {
    if (tokenData.state === 2) {
      throw new Error("Your account has been disabled, please contact with us");
    }
    return next();
  } catch (error) {
    res.status(403).json({
      success: false,
      message: "Something went wrong on statusCheck",
      error: error.message,
    });
  }
};

module.exports = { isSameUser, isAdmin, statusCheck };
