const express = require('express')
const router = express.Router()


const userHandler_Info = require('../roter_handler/userInfo')
router.get('/userInfo', userHandler_Info.getUserInfo)
router.post('/userinfo', userHandler_Info.updateUserInfo)
router.post('/updatepwd', userHandler_Info.updatepwd)
module.exports = router