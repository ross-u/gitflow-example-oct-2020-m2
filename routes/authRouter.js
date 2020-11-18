var express = require("express");
var authRouter = express.Router();

// Your routes
siteRouter.get('/profile', (req, res, next) => {
    res.send('Route for people')
  })

module.exports = authRouter;
c