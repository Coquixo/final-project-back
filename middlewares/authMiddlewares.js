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

  if (inputEmail === tokenData.email) {
    next();
  } else {
    res.status(403).json({ message: "You have no access" });
  }
};

const isAdmin = () => async (req, res, next) => {};

module.exports = { isSameUser };
