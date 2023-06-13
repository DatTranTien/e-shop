exports.sendToken=(user,res,mess,statusCode)=>{
    const token = user.generateToken()
    
    res.status(statusCode).cookie("token",token,{
        ...this.cookieOptions,
        expires: new Date(Date.now()+15*24*60*1000)
    }).json({
        success:true,
        message:mess,
        // token
    })
}
exports.sendTokenLogin=(user,res,mess,statusCode,id)=>{
    const token = user.generateTokenLogin(id)
    
    res.status(statusCode).cookie("token",token,{
        // ...this.cookieOptions,
        expires: new Date(Date.now()+15*24*60*1000)
    }).json({
        success:true,
        message:mess,
        token
    })
}
exports.cookieOptions ={
    secure: process.env.NODE_ENV === "Development"?false:true,
        httpOnly: process.env.NODE_ENV === "Development"?false:true,
        sameSite: process.env.NODE_ENV === "Development"?false:"none",
}