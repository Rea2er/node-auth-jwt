const router = require("express").Router();

router.post("/signup", (req, res) => {
  res.send("Sign Up");
});

module.exports = router;
