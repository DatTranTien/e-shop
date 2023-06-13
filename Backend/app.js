const { config } = require("dotenv")
const express=require("express")
const { errorHandle } = require("./middlewares/error.js")
var cookieParser = require('cookie-parser')
const app=express()
const user = require('./routes/user.js')
const product = require("./routes/product.js")
const order = require("./routes/order.js")

app.use(cookieParser())
config({
    path: './data/config.env'
})

// middlewares
app.use(express.json())

app.get('/',(req,res,next)=>{
    res.send("start app")
})
app.use('/api/v1/user',user)
app.use('/api/v1/product',product)
app.use('/api/v1/order',order)
app.use(errorHandle)

module.exports = app