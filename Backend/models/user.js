const mongo=require('mongoose')

const schema=new mongo.Schema({})

module.exports=mongo.model('User',schema)