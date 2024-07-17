const ownerModal = require("../models/owner.model");
const { hashPassword}  = require("../utils/passwordHandler");
const addOwner = async( req,res)=>{
       try {
        let {fullName,password,email} = req.body;
        let owner = await ownerModal.find();
         password = await hashPassword(password);

        if(owner.length > 0) return res.status(409).send("Your are not allowed")
            owner = await ownerModal.create({
                fullName,
                email,
                password: await hashPassword(password)
            });
            res.send(owner);
       } catch (error) {
        res.status(409).rend(error.message);
        
       }
       
}



module.exports = addOwner;






