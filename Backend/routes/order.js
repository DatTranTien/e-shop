const { createOrder, getMyOrders, getOrderDetail, processOrder, getAdminOrders, processPayment } = require('../controllers/order')
const { isAuthentication, isAdmin } = require('../middlewares/auth')
const { singleUpload } = require('../middlewares/multer')
const express=require('express')
const order = express.Router()
order.post('/new',isAuthentication,createOrder)

order.post('/payment',isAuthentication,processPayment)

order.get('/my',isAuthentication,getMyOrders)
order.get('/admin',isAuthentication,isAdmin,getAdminOrders)
order.get('/single/:id',isAuthentication,getOrderDetail)
order.put('/single/:id',isAuthentication,isAdmin,processOrder)

module.exports=order