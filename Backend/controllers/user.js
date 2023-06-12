const user = require("../models/user")
const bcrypt = require('bcrypt')
const ErrorHandler = require("../utils/error")
const { asyncError } = require("../middlewares/error")
exports.login = asyncError(async (req,res,next)=>{
    const {email,password}=req.body
    const userInfor=await user.findOne({email}).select('+password').exec()
    if (!userInfor) {
    return    res.status(404).json({
            success:false,
            message:"Incorrect Email"
        })
    }
    const isMatch= await bcrypt.compare(password,userInfor?.password)
    if(!isMatch){
      return  next(new ErrorHandler("Incorrect password!",400))
    }
    res.status(200).json({
        success:true,
        message:"Login successful!"
    })
})   
exports.signup= asyncError(async(req,res,next)=>{
    const {name,email,password,address,pinCode,country,city}=req.body
    await user.create({
        name,email,password,address,pinCode,country,city
    })
    res.status(201).json({
        success:true,
        message:"Registered success!"
    })
})
