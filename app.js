const cookieParser = require("cookie-parser");
const express = require("express");
const flash = require("express-flash")
const session = require("express-session");
const path = require("path")
require("dotenv").config();
require("./config/db.connection");
const app = express();

//Routes
const userRoute = require("./routes/userRoute");
const ownerRoute = require("./routes/ownerRoute");
const productRoute = require("./routes/productRoute");



app.set("view engine","ejs");
app.set("views",path.resolve("./views"))
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
app.use(session({
        resave:false,
        saveUninitialized:false,
        secret:process.env.SESSION_SECRET
}))
app.use(flash())

app.get("/",(req,res)=>{
        res.render("index")
})
app.use("/api/v1/user",userRoute);
app.use("/api/v1/product",productRoute);
app.use("/api/v1/owner",ownerRoute);




app.listen(3000);