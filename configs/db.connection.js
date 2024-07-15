const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/tshirtmania")
.then(()=>{
    console.log("connected");
})
.catch((err)=>{
    console.log("something went wrong", err);
})


module.exports = mongoose.connection;