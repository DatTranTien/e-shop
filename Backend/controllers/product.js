const { asyncError } = require("../middlewares/error");
const product = require("../models/product");
const ErrorHandler = require("../utils/error");
const { getDataUri } = require("../utils/features")
const cloudinary=require('cloudinary')

exports.getAllProducts=asyncError(async (req,res,next)=>{
    const all=await product.find()

    res.status(200).json({
        success: true,
        all
    })
})
exports.getDetailProduct=asyncError(async (req,res,next)=>{
    const detail=await product.findById(req.params.id)
    if (!detail) {
        return next(new ErrorHandler("Product not found!",404))
    }
    res.status(200).json({
        success: true,
        detail
    })
})
exports.createNewProduct=asyncError(async (req,res,next)=>{
    const {name,description,price,stock,category}=req.body

    if (!req.file) {
        return next(new ErrorHandler("Please add image!")) 
    }
    let file=getDataUri(req.file)
    const myCloud = await cloudinary.v2.uploader.upload(file.content)
   let image = {
        public_id: myCloud.public_id,
        url: myCloud.secure_url
    }
    await product.create({
        name,description,price,stock,images:[image],category
    })
    res.status(200).json({
        success: true,
        message:"Product created successful!"
    })
})
exports.updateImageProduct=asyncError(async (req,res,next)=>{
    const detail=await product.findById(req.params.id)
    if (!req.file) {
        return next(new ErrorHandler("Please add image!")) 
    }
    if (!detail) {
        return next(new ErrorHandler("Product not found!")) 
    }
    let file=getDataUri(req.file)
    const myCloud = await cloudinary.v2.uploader.upload(file.content)
   let image = {
        public_id: myCloud.public_id,
        url: myCloud.secure_url
    }
    detail.images.push(image)
    await detail.save()
    res.status(200).json({
        success: true,
        message:"Image added successful!"
    })
})
exports.deleteProduct=asyncError(async (req,res,next)=>{
    const detail=await product.findById(req.params.id)
    if (!detail) {
        return next(new ErrorHandler("Product not found!",404)) 
    }
    detail.images.forEach(async(item,i) => {
        await cloudinary.v2.uploader.destroy(detail.images[i].public_id)
    });
    
    await detail.deleteOne()
    res.status(200).json({
        success: true,
        message:"Product deleted successful!"
    })
})
exports.deleteImageProduct=asyncError(async (req,res,next)=>{
    
    const detail=await product.findById(req.params.id)
    let isExist=-1
    let id=req.query.id
    if (!detail) {
        return next(new ErrorHandler("Product not found!",404)) 
    }
    if (!id) {
        return next(new ErrorHandler("Please image!",404)) 
    }

    detail.images.forEach((item,index) => {
        if (item._id.toString()=== id.toString()) {
            isExist=index
        }
    });
    if (isExist<0) {
        return next(new ErrorHandler("Image doesn't exist",400))
    }
    await cloudinary.v2.uploader.destroy(detail.images[isExist].public_id)
    
    detail.images.splice(isExist,1)
    await detail.save()
    res.status(200).json({
        success: true,
        message:"Image delete successful!"
    })
})
exports.updateProduct=asyncError(async (req,res,next)=>{
    const {name,description,price,stock,category}=req.body
    const detail=await product.findById(req.params.id)
    if (name) {
        detail.name = name
    }
    if (description) {
        detail.description = description
    }
    if (price) {
        detail.price = price
    }
    if (stock) {
        detail.stock = stock
    }
    if (category) {
        detail.category = category
    }

    await detail.save()
   
    res.status(200).json({
        success: true,
        message:"Product updated successful!"
    })
})