const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    image:{
        type: String,
        required:true,
        maxLength: 1024*1024*1,
    },
    name: {
        type: String,
        required:true,
    },
    price :{
        type: Number,
        required:true,
    },
    discount :{
        type: Number,
        default:0,
    },
   size:{
    type:Array,
    default:[]
   },
   user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'owner'
    }
   

});

module.exports =   mongoose.model("product",productSchema);