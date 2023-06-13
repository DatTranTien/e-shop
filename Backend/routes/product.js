const express=require('express')
const { getAllProducts, getDetailProduct, createNewProduct, updateProduct, updateImageProduct, deleteImageProduct, deleteProduct, deleteCategory, getCategory, createNewCategory } = require('../controllers/product')
const { isAuthentication } = require('../middlewares/auth')
const { singleUpload } = require('../middlewares/multer')
const product=express.Router()

product.get('/all',getAllProducts)
product.get('/single/:id',getDetailProduct)
product.post('/createNewProduct',isAuthentication,singleUpload,createNewProduct)
product.put('/updateProduct/:id',isAuthentication,singleUpload,updateProduct)
product.put('/updateImageProduct/:id',isAuthentication,singleUpload,updateImageProduct)
product.delete('/deleteImageProduct/:id',isAuthentication,singleUpload,deleteImageProduct)
product.delete('/deleteProduct/:id',isAuthentication,singleUpload,deleteProduct)

product.delete('/deleteCategory/:id',isAuthentication,singleUpload,deleteCategory)
product.post('/createNewCategory',isAuthentication,singleUpload,createNewCategory)
product.get('/category',getCategory)

module.exports=product