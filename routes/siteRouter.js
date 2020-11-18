var express = require("express");
const app = require("../app");
var siteRouter = express.Router();

// Your routes
siteRouter.post("/profile", (req, res, next) => {
  res.send("David was here");
});

module.exports = siteRouter;
