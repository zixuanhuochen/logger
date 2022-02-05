

const db = require('../db/index')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../config')

exports.regUser = (req, res) => {
  const userInfo = req.body
  if (!userInfo.username || !userInfo.password) {
    // return res.send({ status: 1, message: '用户名或密码不合法' })
    return res.cc('用户名或密码不合法')
  }

  const sqlStr = 'select * from ev_users where username=?'
  db.query(sqlStr, userInfo.username, (err, results) => {
    if (err) {
      // return res.send({ status: 1, message: err.message })
      return res.cc(err)
    }
    if (results.length > 0) {
      // return res.send({ status: 1, message: '用户名被占用，请更换其他用户名' })
      return res.cc('用户名被占用，请更换其他用户名')
    }
    //对用户密码进行加密
    userInfo.password = bcrypt.hashSync(userInfo.password, 10)
    const sql = 'insert into ev_users set ?'
    db.query(sql, { username: userInfo.username, password: userInfo.password }, (err, results) => {
      if (err) { return res.cc(err) }
      if (results.affectedRows !== 1) {
        //  return res.send({ status: 1, message: '注册用户失败，请稍后再试！' }) 
        return res.cc('注册用户失败，请稍后再试！')
      }
      res.send({ status: 0, message: '注册成功' })
    })
  })

}

exports.login = (req, res) => {
  const userInfo = req.body
  //坑：模版字符串中的变量要使用引号再次包裹
  const sql = `select * from ev_users where username='${userInfo.username}'`
  //先进行用户名判断是否存在
  db.query(sql, (err, results) => {
    if (err) return res.cc(err)
    if (results.length !== 1) {
      return res.cc('登录失败')
    }
    //对密码进行比对
    if (!('password' in userInfo)) return res.cc('请输入密码')
    const compareResults = bcrypt.compareSync(userInfo.password, results[0].password)
    if (!compareResults) return res.cc('密码错误，请重新输入')
    //生成jwt的token返回给客户端，里面不要包含用户密码，头像的值
    const user = { ...results[0], password: '', user_piv: '' }
    const tokenStr = jwt.sign(user, config.jwtSecretKey, { expiresIn: config.expiresIn })
    res.send({
      status: 0,
      msg: 'ok',
      token: 'Bearer ' + tokenStr,
    })
  })


}