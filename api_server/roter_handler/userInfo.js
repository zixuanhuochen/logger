const db = require('../db/index')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../config')


exports.getUserInfo = (req, res) => {
  const sql = 'select id , username , nickname , email , user_piv from ev_users where id=?'
  db.query(sql, req.user.id, (err, results) => {
    if (err) return res.cc(err)
    if (results.length !== 1) return res.cc('获取用户信息失败')
    res.send({
      status: 0,
      msg: 'ok',
      data: results[0]
    })
  })
}
exports.updateUserInfo = (req, res) => {
  const sql = `update ev_users set ? where id=?`
  db.query(sql, [req.body, req.body.id], (err, results) => {
    if (err) return res.cc(err)
    if (results.affectedRows !== 1) return res.cc('修改用户信息失败！')
    res.send({
      status: 0,
      msg: 'ok'
    })
  })


}
exports.updatepwd = (req, res) => {
  const sql = 'select * from ev_users where id=?'
  db.query(sql, req.user.id,(err, results) => {
    if(err) return res.cc(err)
    if(results.length !== 1) return res.cc('用户不存在')
    const compareResults =bcrypt.compareSync(req.body.oldPwd, results[0].password)
    if(!compareResults) return res.cc('密码输入错误')
    const sql = 'update ev_users set password=? where id=?'
    const newPwd = bcrypt.hashSync(req.body.newPwd , 10)
    db.query(sql, [newPwd,req.user.id], (err, results) =>{
      if(err) return res.cc(err)
      if(results.affectedRows !== 1) return res.cc("更新密码失败")
      res.cc('更新密码成功', 0)
    })
  } )
}