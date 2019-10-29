const { getNews } = require('../../services/news/news.service')
const jwt = require('jsonwebtoken')
const { secret } = require('../../config/config')


async function adminController(req, res) {
    try {
        const result = await getNews();
        result.reverse();
        console.log(result[0]);
        for (let news of result) {
            news.photo = `static/${news['photo.filename']}`
        }
        console.log(result)
        res.status(200).json(result)
    } catch (error) {
        console.log('Catched error: ')
        res.status(400).json('No token provided!')
    }
}

module.exports = adminController