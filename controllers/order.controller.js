const orderModel = require("../models/order.model");
const userModel = require("../models/user.model");

const createOrder = async (req,res)=>{
       
    try {
        let {product,quantity,amount,totalAmount,paymentStatus} = req.body;  
        let fetchedUser = await userModel.findOne({_id:req.user.id});
        
        if(!product || !quantity || !amount || !totalAmount || !paymentStatus) return res.status(409).send("All the fields are required !");
        if(!fetchedUser) return res.status(409).send("Order Can not be placed");
        let order = orderModel.create({
            user:fetchedUser._id,
            product,
            quantity,
            amount,
            totalAmount,
            paymentStatus
                });
               fetchedUser.orders.push(order._id);
               await fetchedUser.save();

            res.send(order);
    } catch (error) {

        req.status(409).send(error.message);
        
    }
}

module.exports = {createOrder};