const express = require("express");
const controllers = require("../controllers/index");

const { accountController } = controllers;

const router = express.Router();

router.get("/account", (req, res) => {
  res.send(accountController.getAccountInfoFromDatabase)
});

module.exports = router;
