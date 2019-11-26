'use strict'

const { insertNews } = require('../../services/news/news.service'); 
const jwt = require('jsonwebtoken')

async function addNewsController(req, res) {
    const photo = req.file;
    console.log(photo)
    const { shortHeader, header, tags, text } = req.body;
    console.log(shortHeader, header, tags, text)

    try {
        const result = await insertNews(shortHeader, header, tags, text, photo.filename)
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