/**
 * Created by Andy Wang.
 * User: 8230459@qq.com
 * Date: 2018/4/26
 * Time: 16:31
 */


//连接数据库
var mongoose = require("./conn");

var {encrypt, decrypt} = require("./crypto");

//用户表结构
const userSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    password: String,
    grade: String,
    tel: String
  }, {
    versionKey: false
  }
);

//创建表模型
const User = mongoose.model('users', userSchema);

//操作用户表
module.exports = {
  //查找用户总数
  count(data, callback) {
    User.count(data, (err, len) => {
      callback(err, len);
    });
  },

  //查找用户
  find(condition, callback, pageSize, pageIndex) {
    let config = {sort: {"-createtime": 1}}
    config.limit = pageSize
    config.skip = pageSize * (pageIndex || 0)
    User.find(condition, null, config, (err, records) => {
      if (err) callback(err);
      else callback(records);
    })
  },

  //查找单个用户
  findOne(query, callback) {
    User.findOne(query, (err, doc) => {
      if (err) callback(null);
      else callback(doc);
    })
  },

  //增加用户
  add(data, callback) {
    let _data = {}
    _data.username = decrypt(data.username);
    _data.email = decrypt(data.email);
    _data.password = decrypt(data.password);
    const user = new User(_data);
    user.save((err, doc) => {
      if (err) callback(false, err);
      else callback(doc);
    })
  },

  //删除用户
  del(data, callback) {
    console.log(data)
    User.find(data).remove().exec((err, doc) => {
      if (err) callback(false, err);
      else callback(true, doc);
    })
  }
  ,

  //修改用户
  update(data, callback) {
    console.log(data)
    User.update(JSON.parse(data.condi), JSON.parse(data.modi), (err, doc) => {
      if (err) callback(false, err);
      else callback(true, doc);
    })
  }
}

