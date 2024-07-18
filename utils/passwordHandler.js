const bcrypt = require("bcrypt");


const hashPassword = async (password)=>{
    let salt = await bcrypt.genSalt(10);
    let psd = await bcrypt.hash(password,salt);
    return psd;
}

const comparePassword = async (password,hash) =>{
    let result = await bcrypt.compare(password,hash);
    return result;

}

module.exports = {hashPassword,comparePassword};