const { config } = require("dotenv")
const express=require("express")
const app=express()
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

module.exports = app