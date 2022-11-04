const jwt = require("jsonwebtoken");

const tokenSign = async (user)=>{
    return jwt.sign(
      {
        _username: user.user,
        _id: user.id
      },
      process.env.JWT_MASTERKEY,
      {
        expiresIn: "2h",
      }
    );
}

const verifyToken = async(token)=>{
    try {
        return jwt.verify(token,process.env.JWT_MASTERKEY);
    } catch (error) {
        return null
    }
}


module.exports = {
    tokenSign,
    verifyToken
}