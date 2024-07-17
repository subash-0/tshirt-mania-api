const mongoose = require("mongoose");



const userSchema = mongoose.Schema({
    fullName: {
        type:String,
        required:true
    },
    email:  {
        type:String,
        required:true
    },
    password : {
        type:String,
        required:true
    },
    contact: Number,
    picture:String,
    products : {
        type: Array,
        default :[],
    },
    

});

module.exports =   mongoose.model("owner",userSchema);