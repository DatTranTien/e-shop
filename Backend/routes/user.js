const express = require('express')
const user = express.Router()
user.get('/',(req,res,next)=>{
    res.send("User!")
})
module.exports=user