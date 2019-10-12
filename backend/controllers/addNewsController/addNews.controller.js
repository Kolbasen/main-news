'use strict'

const { insertNews } = require('../../services/news/news.service'); 

async function addNewsController(req, res) {
    const { header, text } = req.body;
    console.log(header, text)

    try {
        const result = await insertNews(header, text)
        if (result.errors) {
            return res.status(400).json(result.errors[0].message);
        } else {
            return res.status(200).json(result);
        }
    } catch (error) {
        console.log('Cathched error');
        console.log(error);
    }
}

module.exports = addNewsController;