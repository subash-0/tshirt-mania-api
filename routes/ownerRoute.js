const express = require("express");
const route = express.Router();
const addOwner = require("../controllers/owner.controller")


 route.post("/",addOwner);






module.exports = route;