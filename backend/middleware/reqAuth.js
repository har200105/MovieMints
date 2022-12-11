const jwt = require('jsonwebtoken');
// const {} 
const User = require('../models/user');


exports.reqAuth = async(req, res, next) => {
    const token = req.headers?.authorization;
    const accessToken = token.split("Bearer")[1];

    if (!accessToken) {
        
    }

    const user = jwt.verify(accessToken, process.env.JWT_SECRET);
    const { _id } = user;
    const authorizedUser = await User.findById(_id);

    req.user = authorizedUser;
    next();
}