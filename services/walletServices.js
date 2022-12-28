const checkAction = (action) => {
  if (action === "add") {
    return true;
  }
  if (action === "withdraw") {
    return false;
  }
};

module.exports = { checkAction };
