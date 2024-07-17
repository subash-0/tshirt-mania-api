const cookieParser = require("cookie-parser");
const express = require("express");
const flash = require("express-flash")
const session = require("express-session");
require("dotenv").config();
require("./config/db.connection");


const app = express();

//Routes
const userRoute = require("./routes/userRoute");
const ownerRoute = require("./routes/ownerRoute");
const productRoute = require("./routes/productRoute");




app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
app.use(session({
        resave:false,
        saveUninitialized:false,
        secret:process.env.SESSION_SECRET
}))
app.use(flash())

app.use("/api/v1/user",userRoute);
app.use("/api/v1/product",productRoute);
app.use("/api/v1/owner",ownerRoute);




app.listen(3000);