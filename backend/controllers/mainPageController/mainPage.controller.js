'use strict'

const { getTenNews } = require('../../services/news/news.service')

async function mainPageController(req, res) {
    const { currentid } = req.headers;
    console.log(currentid)
    try {
        if (+currentid === -1) {
            const result = await getTenNews(currentid);
            const { id } = result[0];
            console.log(id)
            console.log(result)
            for (let news of result) {
                news.photo = `static/${news['photo.filename']}`
            }
            res.status(200).json(result)            
        } else {
            const result = await getTenNews(currentid);
            console.log(result)
            for (let news of result) {
                news.photo = `static/${news['photo.filename']}`
            }
            res.status(200).json(result)
        }
    } catch (error) {
        console.log('Catched error: ')
        console.log(error)
    }
}

module.exports = mainPageController;
