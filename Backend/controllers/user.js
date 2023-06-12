const user = require("../models/user")
const bcrypt = require('bcrypt')
const ErrorHandler = require("../utils/error")
const { asyncError } = require("../middlewares/error")
const { sendToken, cookieOptions, sendTokenLogin } = require("../utils/sendToken")
exports.login = asyncError(async (req,res,next)=>{
    const {email,password}=req.body
    const userInfor=await user.findOne({email}).select('+password').exec()
    if (!userInfor) {
    return    res.status(404).json({
            success:false,
            message:"Incorrect Email or Pass!"
        })
    }
    const isMatch= await bcrypt.compare(password,userInfor?.password)
    if(!isMatch){
      return  next(new ErrorHandler("Incorrect Email or Pass!",400))
    }
    sendTokenLogin(user,res,"Login successful!",200,userInfor._id)
})   

exports.signup= asyncError(async(req,res,next)=>{
    const {name,email,password,address,pinCode,country,city}=req.body
   
    let userInfo=await user.findOne({email}).exec()
    if (userInfo) {
        return next(new ErrorHandler("User Already Exits",400))
    }
   
     userInfo= await user.create({
        name,email,password,address,pinCode,country,city
    })
    sendToken(userInfo,res,"Registered success!",201)
    // res.status(201).json({
    //     success:true,
    //     message:"Registered success!"
    // })
})
exports.getMyProfle=asyncError(async(req,res,next)=>{
    const userInfor=await user.findById(req.user._id)
    res.status(200).json({
        success:true,
        userInfor
    })
})
exports.logout=asyncError(async(req,res,next)=>{
    // const userInfor=await user.findById(req.user._id)
    res.status(200).cookie("token","",{
        ...cookieOptions,
        expires: new Date(Date.now())
    }).json({
        success:true,
        message:"Logged Out!"
    })
})
