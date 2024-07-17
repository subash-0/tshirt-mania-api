const express = require("express");
const route = express.Router();
const {registerUser, userLogin, userLogOut} = require("../controllers/user.controller");

const {isLoggedIn} = require("../utils/loggedInHandler")

route.post("/register",registerUser);
route.post("/login",isLoggedIn,userLogin);
route.get("/logout",userLogOut)



module.exports = route;