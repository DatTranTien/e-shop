const mongo=require('mongoose')

const connectDB=async()=>{
    try {
        const {connection}=await mongo.connect(process.env.MONGO_URI,{
            dbName:"Ecommerce"
        })
        console.log("check connection,",connection.host)
    } catch (error) {
        console.log("error",error)
        process.exit(1)
    }
}

module.exports=connectDB