const express = require("express");
const route = express.Router();
const {isLoggedIn} = require("../utils/loggedInHandler");
let {createProduct, showProduct, deleteProduct, updateProduct,} = require("../controllers/product.controller");
let upload = require("../utils/multer-config");

route.post("/create-product",isLoggedIn,upload.single("image"),createProduct);
route.get("/show-product",showProduct)
route.delete("/delete/:id",isLoggedIn,deleteProduct);

route.put("/update-product/:id",isLoggedIn,upload.single("image"),updateProduct);




module.exports = route;