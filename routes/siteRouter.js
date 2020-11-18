var express = require("express");
const app = require("../app");
var siteRouter = express.Router();

// Your routes
siteRouter.get("/profile", (req, res, next) => {
  res.render("Home");
});

module.exports = siteRouter;
