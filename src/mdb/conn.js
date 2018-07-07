/**
 * Created by Andy Wang.
 * User: 8230459@qq.com
 * Date: 2018/4/26
 * Time: 16:31
 */

//连接数据库
var mongoose = require('mongoose');
mongoose.connect('mdb://127.0.0.1:27017/sys');
const db = mongoose.connection;
db.on('error', console.error.bind(console, '连接错误：'))
db.once('open', callback => console.log('MongoDB连接成功！！'));

process.on('SIGNIT', () => {
  mongoose.connection.close(() => {
    console.log('connection close');
    process.exit(0);
  })
})
module.exports = mongoose;
