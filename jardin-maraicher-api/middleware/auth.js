require("dotenv/config");
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authSeller = async (req,res,next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');

        const decoded = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
        const user = await User.findOne({ _id : decoded._id, isSeller : true, 'tokens.token' : token});
        
        if(!user){
            throw new Error("Not found");
        }

        req.user = user;
        req.token = token;
        next()
    }catch(e){
        console.log(e);
        // res.status(401).json({
        //     error : "Please authenticate"
        // })
    }
}


const authUser = async (req,res,next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');

        const decoded = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
        const user = await User.findOne({ _id : decoded._id, isSeller : false,'tokens.token' : token});

        if(!user){
            throw new Error("Not found");
        }

        req.user = user;
        req.token = token;
        next();
    }catch(e){
        console.log(e);
        // res.status(401).json({
        //     error : "Please authenticate"
        // });
    }
}

const authN = async (req,res,next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');

        const decoded = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
        const user = await User.findOne({ _id : decoded._id, 'tokens.token' : token});

        if(!user){
            throw new Error("Not found");
        }

        req.user = user;
        req.token = token;
        next();
    }catch(e){
        console.log(e);
        // res.status(401).json({
        //     error : "Please authenticate"
        // });
    }
}

module.exports = {
    authSeller,
    authUser,
    authN
}