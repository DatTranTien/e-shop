const user = require("../models/user")
const bcrypt = require('bcrypt')
const ErrorHandler = require("../utils/error")
const { asyncError } = require("../middlewares/error")
const { sendToken, cookieOptions, sendTokenLogin } = require("../utils/sendToken")
const { getDataUri } = require("../utils/features")
const cloudinary=require('cloudinary')

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
    let avatar = undefined

    if (req.file) {
        let file=getDataUri(req.file)
    const myCloud = await cloudinary.v2.uploader.upload(file.content)
    avatar = {
        public_id: myCloud.public_id,
        url: myCloud.secure_url
    }
    }
   
     userInfo= await user.create({
        name,email,password,address,pinCode,country,city,avatar
    })
    sendToken(userInfo,res,"Registered success!",201)
    // res.status(201).json({
    //     success:true,
    //     message:"Registered success!"
    // })
})
exports.updatePic= asyncError(async(req,res,next)=>{   
    const userInfo=await user.findById(req.user._id)
    let file=getDataUri(req.file)
    const myCloud = await cloudinary.v2.uploader.upload(file.content)
    userInfo.avatar = {
        public_id: myCloud.public_id,
        url: myCloud.secure_url
    }

   await userInfo.save()
   
    //  userInfo= await user.create({
    //     name,email,password,address,pinCode,country,city,avatar
    // })
    // sendToken(userInfo,res,"Avatar was updated successfully!",201)
    res.status(200).json({
        success:true,
        message:"Avatar was updated successfully!"
    })
})
exports.getMyProfle=asyncError(async(req,res,next)=>{
    const userInfor=await user.findById(req.user._id)
    res.status(200).json({
        success:true,
        userInfor
    })
})
exports.updateProfile=asyncError(async(req,res,next)=>{
    const userInfo=await user.findById(req.user._id)
    const {name,email,address,pinCode,country,city}=req.body
    if (name) {
        userInfo.name=name
    }
    if (email) {
        userInfo.email=email
    }
    if (address) {
        userInfo.address=address
    }
    if (pinCode) {
        userInfo.pinCode=pinCode
    }
    if (country) {
        userInfo.country=country
    }
    if (city) {
        userInfo.city=city
    }
   await userInfo.save()
    res.status(200).json({
        success:true,
        message:"Profile was updated successfully!"
    })
})
exports.changePassword=asyncError(async(req,res,next)=>{
    const userInfo=await user.findById(req.user._id).select('+password')    
    const {oldPassword,newPassword}= req.body
    if (!oldPassword || !newPassword) {
        return next(new ErrorHandler("please enter password!",400))
    }
    const isMatched=await user.comparePassword(oldPassword,userInfo.password)
    if (!userInfo) {
        return next(new ErrorHandler("Incorrect email or password!"))
    }
    if (!isMatched) {
        return next(new ErrorHandler("incorrect old password!"))
    }

    userInfo.password=newPassword
    
    await userInfo.save()
    res.status(200).json({
        success:true,
        message:"changePassword Successed!"
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
