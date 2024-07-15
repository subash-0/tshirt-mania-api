const mongoose = require("mongoose");



const productSchema = mongoose.Schema({
    image: String,
    name: String,
    price : Number,
    discount :[{
        type: Number,
        default:0,
        required:true,
    }],
   bgColor:String,
   panelColor:String
   

});

module.exports =   mongoose.model("user",productSchema);