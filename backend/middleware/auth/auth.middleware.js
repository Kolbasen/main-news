const jwt = require('jsonwebtoken');
const { secret } = require('../../config/config')

const verifyAccessToken = (req, res, next) => {
    const {
      authorization,
    } = req.headers;
    if (!authorization) {
      return res.status(403).send({
        message: 'Token does not exist',
      });
    }
    const base64Url = authorization.split(' ')[1];
  
    jwt.verify(base64Url, secret , async(err, decoded) => {
        if (err) {
            return res.status(403).send({
                message: 'Invalid Signature'
            })
        }
        console.log(decoded);
        if (decoded.admin) {
            next();
        } else {
            return res.status(403).send({
                message: 'Invalid Signature'
            })
        }
    })
  };

  module.exports = verifyAccessToken;