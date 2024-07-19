const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    product:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"product",
            required:true,
    }],
    quantity:{
        type:Number,
        required:true,
        default:0
    },
    amount:{
        type:Number,
        required:true,
        default:0
    },
    totalAmount:{
        type:Number,
        default:0,
    },
    paymentStatus:{
        type:Boolean,
        required:true,
        default:false
    }
});


module.exports = mongoose.model("order",orderSchema);