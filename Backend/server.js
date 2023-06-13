const app = require('./app')
const http =require('http')
const connectDB = require('./data/database')
const cloudinary=require('cloudinary')


connectDB()
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY, 
    api_secret: process.env.CLOUD_API_SECRET
  });
// exports.

http.createServer(app).listen(process.env.PORT, ()=>{
    console.log(`server run on port : ${process.env.PORT}`)
})