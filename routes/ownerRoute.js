const express = require("express");
const route = express.Router();
const {isLoggedIn} = require("../utils/loggedInHandler")
const {addOwner, loginOwner,showOwner} = require("../controllers/owner.controller")


 route.post("/register",addOwner);
 route.post("/login",loginOwner);
route.get("/profile",isLoggedIn,showOwner)





module.exports = route;