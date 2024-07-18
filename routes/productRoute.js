const express = require("express");
const route = express.Router();
const {isLoggedIn} = require("../utils/loggedInHandler");
let {createProduct, showProduct, deleteProduct, updateProduct, addToCart, showCart,} = require("../controllers/product.controller");
let upload = require("../utils/multer-config");

route.post("/create-product",isLoggedIn,upload.single("image"),createProduct);
route.get("/show-product",showProduct)
route.delete("/delete/:id",isLoggedIn,deleteProduct);
route.put("/update-product/:id",isLoggedIn,upload.single("image"),updateProduct);
route.get("/add-to-cart/:id", isLoggedIn,addToCart)
route.get("/show-cart", isLoggedIn,showCart)




module.exports = route;