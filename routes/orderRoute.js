const express = require("express");
const route = express.Router();
const {isLoggedIn} = require("../utils/loggedInHandler");


route.post("/create-order",isLoggedIn);


module.exports = route;