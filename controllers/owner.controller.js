const ownerModel = require("../models/owner.model");
const { generateJWT } = require("../utils/jwtHandler");
const { hashPassword, comparePassword}  = require("../utils/passwordHandler");
const addOwner = async( req,res)=>{
       try {
        let {fullName,password,email} = req.body;
        let owner = await ownerModel.find();
         password = await hashPassword(password);
        if(owner.length > 0) return res.status(409).send("Your are not allowed")
            owner = await ownerModel.create({
                fullName,
                email,
                password,
            });
            let token = generateJWT(owner);
            res.cookie("token",token);
            res.send("Owner Created Successfully !");
       } catch (error) {
        res.status(409).send(error.message);
        
       }
       
}

const loginOwner = async (req,res)=>{
    let {email,password} = req.body;
    try {
     if(!email || !password) return res.status(409).send("All fields are required !")
     let owner = await ownerModel.findOne({email})
     if(!owner) res.status(409).send("Invalid Login Credentials !");
     let verify = await comparePassword(password,owner.password);
     if(!verify) res.status(409).send("Invalid Login Credentials !");
     let token = generateJWT(owner);
     res.cookie("token",token);
     res.send("Logged In successfully");
    } catch (error) {
     res.status(409).send(error.message);
     
    }
}

const showOwner = async (req,res)=>{
    let owner = await ownerModel.find().select("-password").populate('products');
    res.send(owner);
}
module.exports = {addOwner, loginOwner,showOwner};






