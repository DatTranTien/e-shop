const express = require('express')
const { login, signup, getMyProfle, logout } = require('../controllers/user')
const { isAuthentication } = require('../middlewares/auth')
const user = express.Router()
user.post('/login',login)
user.post('/signup',signup)
user.get('/me',isAuthentication,getMyProfle)
user.get('/logout',isAuthentication,logout)
module.exports=user