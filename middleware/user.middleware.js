var jwt = require('jsonwebtoken')
const md5 = require('md5')

const hashing = (password) => {
  let hashPassword = '$@' + password + '#$'
  return md5(hashPassword)

};

function verifyToken(req, res, next) {
  const {
    token
  } = req.headers;

  if (typeof token != undefined) {

    jwt.verify(token, "SECRET", (err, decoded) => {
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