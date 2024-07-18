const productModel = require("../models/product.model");
const ownerModel = require("../models/owner.model");
const createProduct = async (req,res)=>{
        let {name,price,discount} = req.body;
        let image = req.file.filename;
        let imgSize = req.file.size;
        let owner = await ownerModel.findOne({_id:req.user.id})
        try {
            if(!name || !price || !image) return res.status(409).send("Name, Price and Image is required");
            if(imgSize>1024*1024) return res.status(409).send("Image size must be less than 1 MB");
            let product = await productModel.create({
                name,
                image,
                price,
                size:["L","M","XL","XXL"],
                discount,
                user:req.user.id,

            })
            owner.products.push(product._id);
            await owner.save();
            res.send(product)
 
        } catch (error) {
            res.status(409).send(error.message);
            
        }
       
}

const showProduct = async(req,res) =>{
        try {    
        let product = await productModel.find();
        res.send(product)
        } catch (error) {
            res.status(404).send(error.message)
            
        }

}

const updateProduct = async(req,res)=>{
   
    try {
        let {name,price,discount} = req.body;
        let id = req.params.id;
        let image = req.file.filename;
        let imgSize = req.file.size;
        if(!name || !price || !image) return res.status(409).send("Name, Price and Image is required");
        if(imgSize>1024*1024) return res.status(409).send("Image size must be less than 1 MB");
        let product = await productModel.findOneAndUpdate({_id:id},{
            name,
            image,
            price,
            size:["L","M","XL","XXL"],
            discount,
            user:req.user.id,
          },{new:true});
          res.send(product)  
          } catch (error) {
        res.status(409).send(error.message);
        
    }
}
const deleteProduct = async(req,res)=>{
    let id = req.params.id;
    let {name,price,discount} = req.body;
    let image = req.file.filename;
    let imgSize = req.file.size;
    try {
        let removedProduct = await productModel.findOneAndUpdate({_id:id})
        if(!removedProduct) return res.status(409).send("Item not found ");
        req.flash ("success","Item removed successfully !");
        res.send("Item removed Successfully !");
    } catch (error) {
        res.status(409).send(error.message);
        
    }
}

module.exports = {createProduct,showProduct,deleteProduct,updateProduct};