const isSameUser = () => async (req, res, next) => {
  inputEmail = req.params.email || req.body.email;
  let authorization = req.headers.authorization;
  const token = authorization.substring(7, authorization.lenght);

  function parseJwt(token) {
    return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
  }
  const currentEmail = parseJwt(token).email;

  if (inputEmail === currentEmail) {
    next();
  } else {
    res.status(403).json({ message: "You have no access" });
  }
  console.log(token);
  console.log(currentEmail);
};

module.exports = { isSameUser };
