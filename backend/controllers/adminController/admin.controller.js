const { getNews } = require('../../services/news/news.service')

async function adminController(req, res) {
    try {
        const result = await getNews();
        result.reverse();
        console.log(result);
        res.status(200).json(result)
    } catch (error) {
        console.log('Catched error: ')
        console.log(error)
    }
}

module.exports = adminController