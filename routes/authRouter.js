var express = require("express");
const siteRouter = require("./siteRouter");
var authRouter = express.Router();

// Your routes
siteRouter.get("/profile", (req, res, next) => {
  res.send("Route for people");
});

siteRouter.get("/logout", (req, res, next) => {});

module.exports = authRouter;
