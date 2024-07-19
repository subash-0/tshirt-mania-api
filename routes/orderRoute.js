const express = require("express");
const route = express.Router();
const {isLoggedIn} = require("../utils/loggedInHandler");
const { createOrder, deleteOrder, showOrder } = require("../controllers/order.controller");


route.post("/create-order",isLoggedIn,createOrder);
route.get("/",isLoggedIn,showOrder)
route.delete("/delete-order/:id",isLoggedIn,deleteOrder);


module.exports = route;