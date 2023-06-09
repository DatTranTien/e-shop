const app = require('./app')
const http =require('http')
const connectDB = require('./data/database')
connectDB()
http.createServer(app).listen(process.env.PORT, ()=>{
    console.log(`server run on port : ${process.env.PORT}`)
})