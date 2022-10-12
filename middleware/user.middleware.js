var jwt = require('jsonwebtoken')
const md5 = require('md5')

const {secret} = require('../config/server.config');

const hashing = (password) => {
  let hashPassword = '$@' + password + '#$'
  return md5(hashPassword)

};

function verifyToken(req, res, next) {
  const {
    token
  } = req.headers;

  ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;


  if (typeof token != undefined) {

    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        res.status(403).send({
          error: false,
          status: 403,
          mesage: 'Acceso denegado',
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.status(403).send({
      error: false,
      status: 403,
      mesage: 'Acceso denegado',
    });
  }
}


module.exports = {
  hashing,
  verifyToken,
};