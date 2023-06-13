const express=require('express')
const { getAllProducts, getDetailProduct, createNewProduct, updateProduct, updateImageProduct, deleteImageProduct, deleteProduct, deleteCategory, getCategory, createNewCategory, getAdminProducts } = require('../controllers/product')
const { isAuthentication, isAdmin } = require('../middlewares/auth')
const { singleUpload } = require('../middlewares/multer')
const product=express.Router()

product.get('/all',getAllProducts)
product.get('/admin',isAuthentication,isAdmin,getAdminProducts)

product.get('/single/:id',getDetailProduct)
product.post('/createNewProduct',isAuthentication,isAdmin,singleUpload,createNewProduct)
product.put('/updateProduct/:id',isAuthentication,isAdmin,singleUpload,updateProduct)
product.put('/updateImageProduct/:id',isAuthentication,isAdmin,singleUpload,updateImageProduct)
product.delete('/deleteImageProduct/:id',isAuthentication,isAdmin,singleUpload,deleteImageProduct)
product.delete('/deleteProduct/:id',isAuthentication,singleUpload,deleteProduct)

product.delete('/deleteCategory/:id',isAuthentication,isAdmin,singleUpload,deleteCategory)
product.post('/createNewCategory',isAuthentication,singleUpload,createNewCategory)
product.get('/category',getCategory)

module.exports=product