const express = require("express");
const route = express.Router();
route.get("/", (req,res)=>{
    res.send("Hello users");
});





module.exports = route;