const express = require("express");
const { use } = require("./hostRouter");

const userRequest = express.Router();

userRequest.get("/", (req, res, next) => {
  res.send(`welcome to homepage
    <a href='/add-home'>add house</a>
    `);
  next();
})

module.exports = userRequest;