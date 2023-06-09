const mongo=require('mongoose')
const validator=require("validator")
const bcrypt=require('bcrypt')
const schema=new mongo.Schema({
    name:{
        type:String,
        required:[true,"Please enter name!"],
    },
    email:{
        type: String,
        required:[true,"Please enter email!"],
        validate:validator.isEmail,
        unique:[true, "Email Already Exist"]
    },
    password:{
        type:String,
        required:[true,"Please enter password!"],
        minLength:[6, "Password must be at least 6 characters long"],
        select:false
    },
    address:{
        type:String,
        required:[true,"Please enter address!"]
    },
    city:{
        type:String,
        required:[true,"Please enter city!"]
    },
    country:{
        type:String,
        required:[true,"Please enter country!"]
    },
    pinCode:{
        type:Number,
        required:[true,"Please enter pinCode!"]
    },
    role:{
        type:String,
        enum:['admin','user'],
        default:'user'
    },
    avatar:{
        public_id: String,
        url: String,
    },
    otp: Number,
    otp_expire: Date
})

schema.pre('save',async function(){
    this.password=await bcrypt.hash(this.password,10)
})
schema.methods.comparePassword=async function(enterPass){
    return await bcrypt.compare(enterPass,this.password)
}
module.exports=mongo.model('User',schema)