const { config } = require("dotenv")
const express=require("express")
const { errorHandle } = require("./middlewares/error.js")
var cookieParser = require('cookie-parser')
const app=express()
app.use(cookieParser())
config({
    path: './data/config.env'
})
const user = require('./routes/user.js')

// middlewares
app.use(express.json())

app.get('/',(req,res,next)=>{
    res.send("start app")
})
app.use('/api/v1/user',user)
app.use(errorHandle)

module.exports = app