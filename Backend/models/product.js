const mongo=require('mongoose')
const schema=new mongo.Schema({
    name:{
        type:String,
        required:[true,"Please enter name"]
    },
    description:{
        type:String,
        required:[true,"Please enter description"]
    },
    price:{
        type:Number,
        required:[true,"Please enter price"]
    },
    stock:{
        type:Number,
        required:[true,"Please enter stock"]
    },
    createAt:{
        type:Date,
        default:Date.now
    },
    images:[{
        public_id: String,
        url:String
    }],
    category:{
        type: mongo.Schema.Types.ObjectId,
        ref:"Category"
    }
})
module.exports=mongo.model('Product',schema)