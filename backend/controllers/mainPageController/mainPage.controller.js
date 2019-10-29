'use strict'

const { getNews } = require('../../services/news/news.service')

async function mainPageController(req, res) {
    try {
        const result = await getNews();
        result.reverse();
        console.log(result);
        for (let news of result) {
            news.photo = `static/${news['photo.filename']}`
        }
        res.status(200).json(result)
    } catch (error) {
        console.log('Catched error: ')
        console.log(error)
    }
}

module.exports = mainPageController;
