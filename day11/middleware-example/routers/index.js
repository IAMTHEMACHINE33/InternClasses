const allowWhenNumberIsEven = require("../middlewares/isEven");

const router = require("express").Router();

router.get("/foo", allowWhenNumberIsEven, (req, res) => {
  res.status(200).json({ foo: "bar" });
});

module.exports = router;
