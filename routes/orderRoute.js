const express = require("express");
const route = express.Router();
const {isLoggedIn} = require("../utils/loggedInHandler");
const { createOrder } = require("../controllers/order.controller");


route.post("/create-order",isLoggedIn,createOrder);


module.exports = route;