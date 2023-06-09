const mongo=require('mongoose')
const schema = mongo.Schema({})
module.exports=mongo.model('Order',schema)