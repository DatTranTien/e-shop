const user = require("../models/user")
const bcrypt = require('bcrypt')
exports.login =async(req,res,next)=>{
    const {email,password}=req.body
    const userInfor=await user.findOne({email}).select('+password').exec()
    console.log("userInfor--->",userInfor)
    if (!userInfor) {
        res.status(404).json({
            success:false,
            message:"Incorrect Email"
        })
    }
    const isMatch= await bcrypt.compare(password,userInfor?.password)
    if(!isMatch){
        res.status(400).json({
            success:false,
            message:"Incorrect password!"
        })
    }
    res.status(200).json({
        success:true,
        message:"Login successful!"
    })
}
exports.signup=async(req,res,next)=>{
    const {name,email,password,address,pinCode,country,city}=req.body
    await user.create({
        name,email,password,address,pinCode,country,city
    })
    res.status(201).json({
        success:true,
        message:"Registered success!"
    })
}
