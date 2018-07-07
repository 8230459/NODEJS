var crypto = require("crypto");

//创建 token
function createToken(obj, timeout) {
  var payload = {
    data: obj,//payload
    created: parseInt(Date.now() / 1000),//token生成的时间的，单位秒
    exp: parseInt(timeout) || 3600 * 12 * 7//token有效期，单位秒，与前端保存登录标识cookie的有效期须一致
  };
  //编码 payload
  var payloadStr = Buffer.from(JSON.stringify(payload)).toString("base64")
  //添加签名，防篡改
  var secret = "hel.h-five.com";
  var signatureStr = crypto.createHmac('sha256', secret).update(payloadStr).digest('base64');
  return payloadStr + "." + signatureStr;
}

//解码 token
function decodeToken(token) {
  var decArr = token.split(".");
  //token 是否合法
  if (decArr.length < 2) return false;
  var payload = {}
  try {
    payload = JSON.parse(Buffer.from(decArr[0], "base64").toString());
  } catch (e) {
    return false;
  }
  //检验签名
  var secret = "hel.h-five.com";
  var checkSignature = crypto.createHmac('sha256', secret).update(decArr[0]).digest('base64');
  return {
    payload: payload,
    signature: decArr[1],
    checkSignature: checkSignature
  }
}

//验证 token
function checkToken(token) {
  var resDecode = decodeToken(token);
  //是否存在 token
  if (!resDecode) return false;
  //是否过期
  var expState = (parseInt(Date.now() / 1000) - parseInt(resDecode.payload.created)) > parseInt(resDecode.payload.exp) ? false : true;
  //signature 是否和 checkSignature 一样
  if (resDecode.signature === resDecode.checkSignature && expState) return true;
  return false;
}

function checkCallback(req, res, callback, invaild) {
  if (invaild) {
    callback()
    return
  }
  const _token = req.headers.authorization
  //callback()
  if (_token && checkToken(_token)) callback()
  else res.send({status: 'failed', msg: 'Sorry, You are not authorized!'})
}

module.exports = exports = {createToken, checkToken, checkCallback};
