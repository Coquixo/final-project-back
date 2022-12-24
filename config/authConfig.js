module.exports = {
  secret: process.env.AUTH_SECRET || "thatsfinalsbackendproject",
  expires: process.env.AUTH_EXPIRES || "8h",
  rounds: process.env.AUTH_ROUNDS || 10,
};
