const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access denied");

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SCREET);
    req.user = verified;
    next();
  } catch (err) {
    return res.status(400).send("Invalid token");
  }
};

module.exports = verifyToken;
