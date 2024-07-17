const jwt = require("jsonwebtoken");

const isLoggedIn =(req,res,next)=>{
    if(!req.cookies.token){
        req.flash("error","You are not  logged In");
        return res.redirect("/login");
    }
    let user =   jwt.verify(req.cookies.token,process.env.JWT_KEY);
        req.user = user;
    next();
}


module.exports = {isLoggedIn};