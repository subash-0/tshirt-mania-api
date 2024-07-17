const userModal = require("../models/user.model");
const {generateJWT} = require("../utils/jwtHandler")
const {hashPassword, comparePassword} = require("../utils/passwordHandler");


const registerUser = async (req,res)=>{
   try {
    let {fullName,email,password} = req.body;
    if(fullName ==="" || email === "" || password ==="") return res.status(409).send("All fields are required");
    let user = await userModal.findOne({email});
    password = await hashPassword(password);
    if(user) return res.status(409).send("User Already Exist !!");
    user = await userModal.create({
        fullName,
        email,
        password,
    });
    let token =   generateJWT(user);
    res.cookie("token",token);
    res.send("User created Successfully !")
   } catch (error) {
    res.status(409).send(error.message)
   }


}

const userLogin = async (req,res)=>{
    let {email,password} = req.body;
   try {
    if(!email || !password) return res.status(409).send("All fields are required !")
    let user = await userModal.findOne({email});
    if(!user) return res.status(404).send("Invalid login Credentials !");
    let verify = await comparePassword(password,user.password);
    if(!verify)  return res.status(404).send("Invalid login Credentials !")
    let token = generateJWT(user);
    res.cookie("token",token);


    res.send("User LoggedIn Successfully !")
   } catch (error) {
    res.status(409).send(error.message);
    
   }


}

const userLogOut = async (req,res)=>{
    res.cookie("token","");
    res.redirect("/login");
}


module.exports = {registerUser,userLogin,userLogOut};