const express = require('express')
const config = require('./config')
const expressJWT = require('express-jwt')
const app = express()

//配置跨域
const cors = require('cors')

app.use(cors())
//配置表单数据解析中间件
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {
  res.cc = function (err, status = 1) {
    res.send({
      status,
      message: err instanceof Error ? err.message : err
    })
  }
  next()
})

app.use(expressJWT({secret: config.jwtSecretKey}).unless({path: [/^\/api/]}))


const userRouter = require('./router/user')
app.use('/api', userRouter)

const userinfoRouter = require('./router/userinfo')
app.use('/my', userinfoRouter)
//错误级别中间件
app.use((err, req, res, next) => {
  if(err.name === 'UnauthorizedError') return res.cc('身份认证失败')
})


app.listen(3007, () => {
  console.log('api server running at http://127.0.0.1:3007');
})