const orderModel = require("../models/order.model");
const userModel = require("../models/user.model");

const createOrder = async (req,res)=>{
       
    try {
        let {product,quantity,amount,totalAmount,paymentStatus} = req.body;  
        let fetchedUser = await userModel.findOne({_id:req.user.id});
        console.log({product,quantity,totalAmount,paymentStatus})
        if(!product || !quantity ||  !totalAmount || !paymentStatus) return res.status(409).send("All the fields are required !");
        if(!fetchedUser) return res.status(409).send("Order Can not be placed");
        let order = await orderModel.create({
            user:fetchedUser._id,
            product,
            quantity,
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

const deleteOrder = async (req,res)=>{
    try {
        let _id = req.params.id;
        let user = await userModel.findOne({_id:req.user.id});
        await orderModel.findOneAndDelete(_id);
    
       user.orders.splice(user.orders.indexOf(_id),1);
       await user.save();
       res.send("order remove successfully");
    } catch (error) {
        res.status(409).send(error.message)
    }
}

const showOrder = async (req,res)=>{
        try {
            let order = await orderModel.find().populate("product");
            if(!order) return res.status(404).send("You have not created Any Order !");
            res.send(order);
        } catch (error) {
            res.status(409).send(error.message);
            
        }

}


module.exports = {createOrder,deleteOrder,showOrder};