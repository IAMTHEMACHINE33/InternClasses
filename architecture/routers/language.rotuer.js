const getLanguages = require("../controllers/language.controller");

const router = require("express").Router();

router.get("/languages", getLanguages);

module.exports = router;
