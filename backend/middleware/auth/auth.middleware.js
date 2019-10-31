const jwt = require('jsonwebtoken');

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
  
    jwt.verify(base64Url, process.env.SECRET , async(err, decoded) => {
        if (err) {
            return res.status(403).send({
                message: 'Invalid Signature'
            })
        }
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