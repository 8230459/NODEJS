var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var router = require('./src/routes/index');
var errors = require('./errors');

var app = express();

//视图 jade 编译配置
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /assets

app.use(cookieParser()); //解释请求的Cookie
app.use(logger('dev')); //在控制台显示简单的不同颜色的日志
app.use(bodyParser.json()); //解析请求的JSON
app.use(bodyParser.urlencoded({extended: false})); //解析请求的FORM

//指定静态资源目录
app.use(express.static(path.join(__dirname, 'src/assets')));
app.use(favicon(path.join(__dirname, 'src/assets/images', 'favicon.ico')));

const ALLOW_ORIGIN = ['http://127.0.0.1:8000', 'http://localhost:63342']

app.all('*', function (req, res, next) {
  if (ALLOW_ORIGIN.indexOf(req.headers.origin) !== -1) res.header("Access-Control-Allow-Origin", req.headers.origin)
  res.header('Access-Control-Allow-Methods', "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Credentials", "true")
  res.header("Content-Type", "text/html;charset=utf-8")
  next()
});

//路由控制
router(app);

//错误页面
errors(app);

module.exports = app;

