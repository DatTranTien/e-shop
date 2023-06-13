const { asyncError } = require("../middlewares/error");
const Order = require("../models/order");
const Product = require("../models/product");
const ErrorHandler = require("../utils/error");
const Stripe = require('stripe')
exports.processPayment=asyncError(async(req,res,next)=>{
    const {totalAmount} = req.body
    
   let stripe = new Stripe("sk_test_51NISl2FFavnLEAlOaGQEha0VeG4C5W0mjt7VQq4zsdvDAmzg8DverQSCrcfKKjSaLM0DmJD9HctgDHnAdbmDI6bY00NACBSoHf")
   const {client_secret}= await stripe.paymentIntents.create({
        amount:Number(totalAmount*100),
        currency:"vnd"
  });
    // stripe cuss.create({
    //     amount:Number(totalAmount*100),
    //     currency:"vnd"
    // })
    res.status(200).json({
        success:true,
        client_secret
    })
})

exports.createOrder=asyncError(async(req,res,next)=>{
    const {
        shippingInfo,
        orderItems,
        paymentMethod,
        paymentInfo,
        itemPrice,
        taxPrice,
        shippingCharges,
        totalAmount
    }=req.body
    await Order.create({
        user:req.user._id,
        shippingInfo,
        orderItems,
        paymentMethod,
        paymentInfo,
        itemPrice,
        taxPrice,
        shippingCharges,
        totalAmount
    })

    for (let i = 0; i < orderItems.length; i++) {
        const product = await Product.findById(orderItems[i].product)
        product.stock -= orderItems[i].quantity
        await product.save()
    }
    res.status(201).json({
        success:true,
        message:"Order Placed Successfully!"
    })
})
exports.getMyOrders=asyncError(async (req,res,next)=>{
    const orders=await Order.find({
        user:req.user._id
    })
    res.status(200).json({
        success:true,
        orders
    })
})
exports.getAdminOrders=asyncError(async (req,res,next)=>{
    const orders=await Order.find({})
    res.status(200).json({
        success:true,
        orders
    })
})
exports.getOrderDetail=asyncError(async (req,res,next)=>{
    const orders=await Order.findById(req.params.id)
    if (!orders) {
        return next(new ErrorHandler("Order Not Found",404))
    }

    res.status(200).json({
        success:true,
        orders
    })
})
exports.processOrder=asyncError(async (req,res,next)=>{
    const orders=await Order.findById(req.params.id)
    if (!orders) {
        return next(new ErrorHandler("Order Not Found",404))
    }
    if (orders.orderStatus==="Preparing") {
        orders.orderStatus="Shipped"
    }else if(orders.orderStatus === "Shipped"){
        orders.orderStatus = "Delivered"
        orders.deliveredAt = new Date(Date.now())
    }else return next(new ErrorHandler("Order Already Delivered",400))
await orders.save()
    
    res.status(200).json({
        success:true,
        message:"Order Process Successful!"
    })
})