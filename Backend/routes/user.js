const express = require('express')
const { login, signup, getMyProfle, logout, updateProfile, changePassword, updatePic, forgetPassword, resetPassword } = require('../controllers/user')
const { isAuthentication } = require('../middlewares/auth')
const { singleUpload } = require('../middlewares/multer')
const user = express.Router()
user.post('/login',login)
user.post('/signup',singleUpload,signup)

user.get('/me',isAuthentication,getMyProfle)

user.put('/updateProfile',isAuthentication,updateProfile)
user.put('/changePassword',isAuthentication,changePassword)
user.put('/updatePic',isAuthentication,singleUpload,updatePic)

user.post('/forgetPassword',forgetPassword).put('/forgetPassword',resetPassword)

user.get('/logout',isAuthentication,logout)
module.exports=user