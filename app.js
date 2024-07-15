const cookieParser = require("cookie-parser");
const express = require("express");
require("./configs/db.connection");



const app = express();

//Routes
const userRoute = require("./routes/userRoute");
const ownerRoute = require("./routes/ownerRoute");
const productRoute = require("./routes/productRoute");




app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));


app.use("/api/v1/user",userRoute);
app.use("/api/v1/product",productRoute);
app.use("/api/v1/owner",ownerRoute);




app.listen(3000);