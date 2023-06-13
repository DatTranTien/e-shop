const ErrorHandler = require("../utils/error")
var jwt = require('jsonwebtoken');
const user = require("../models/user");
const { asyncError } = require("./error");
exports.isAuthentication=asyncError(async(req,res,next)=>{
    const {token} = req.cookies
    if (!token) {
     return   next(new ErrorHandler("Not Login!",401))
    }
    const decodeData=await jwt.verify(token,process.env.JWT_SECRET)
        req.user = await user.findById(decodeData._id)
    next()
}
    )
exports.isAdmin=asyncError(async(req,res,next)=>{
    if (req.user.role !== "admin") {
     return   next(new ErrorHandler("Only Admin Allowed!",401))
    }
    next()
}
    )