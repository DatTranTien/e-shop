const mongo=require('mongoose')

const schema=new mongo.Schema({
    type:String,
    required:[true,"Please enter category"]
})
module.exports=mongo.model("Category",schema)