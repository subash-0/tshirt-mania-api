const mongoose = require("mongoose");
const config = require("config");
const dbgr = require("debug")("development:mongoose");
mongoose.connect(`${config.get("MONGODB_URI")}/tshirtmania`)
.then(()=>{
    console.log("connected");
})
.catch((err)=>{
    dbgr("something went wrong", err);
})


module.exports = mongoose.connection;