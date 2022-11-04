const {verifyToken} = require('../helpers/generateToken');
let data;
const checkAuth = async(req,res,next)=>{
    try {
        const token = req.headers.authorization.split(' ').pop();
        const tokenData = await verifyToken(token)
        data = tokenData;
        if (tokenData._id) {
            next();
        } else {
            res.status(409).json({ message: "No tienes permitido el paso!" });
        }
    } catch (error) {
        res.json({message:error.message});
    }
}

module.exports = {
    checkAuth,
    data
}