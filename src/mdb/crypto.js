/**
 * Created by Andy Wang.
 * User: 8230459@qq.com
 * Date: 2018/4/26
 * Time: 16:31
 */


//加密插件
var CryptoJS = require("crypto-js");

//加密字符串
const encrypt = val => CryptoJS.AES.encrypt(val, '123').toString()

//解密字符串
const decrypt = val => CryptoJS.AES.decrypt(val, '123').toString(CryptoJS.enc.Utf8)

module.exports = {encrypt, decrypt}
