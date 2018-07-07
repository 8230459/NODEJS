/**
 * Created by Andy Wang.
 * User: 8230459@qq.com
 * Date: 2018/4/26
 * Time: 16:31
 */

const express = require('express');
const router = express.Router();

/* GET home page. */
module.exports = (app) => {
  app.use(router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express', content: 'Welcome !'});
  }));
}


