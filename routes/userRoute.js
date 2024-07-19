const express = require("express");
const route = express.Router();
const {registerUser, userLogin, userLogOut, userProfile} = require("../controllers/user.controller");

const {isLoggedIn} = require("../utils/loggedInHandler")

route.post("/register",registerUser);
route.post("/login",userLogin);
route.get("/profile",isLoggedIn,userProfile);
route.get("/logout",isLoggedIn,userLogOut)



module.exports = route;