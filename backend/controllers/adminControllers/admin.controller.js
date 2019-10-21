const { getNews } = require('../../services/news/news.service')
const jwt = require('jsonwebtoken')
const { secret } = require('../../config/config')


async function adminController(req, res) {
    const { token } = req.params;
    console.log(token)
    try {
        const { admin } = await jwt.verify(token, secret)
        if (admin) {
            const result = await getNews();
            result.reverse();
            console.log(result);
            res.status(200).json(result)
        } else {
            res.send(400).json({error: 'You not allowed to see this page!'})
        }
    } catch (error) {
        console.log('Catched error: ')
        res.status(400).json('No token provided!')
    }
}

module.exports = adminController