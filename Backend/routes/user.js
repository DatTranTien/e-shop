const express = require('express')
const { login, signup } = require('../controllers/user')
const user = express.Router()
user.post('/login',login)
user.post('/signup',signup)
module.exports=user