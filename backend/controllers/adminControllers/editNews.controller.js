'use strict'

const jwt = require('jsonwebtoken');
const { secret } = require('../../config/config') 
const { updateNews } = require('../../services/news/news.service')

async function editNewsController(req, res) {
    const { id, header, text, tags, token } = req.body;
    console.log(id, header, text, tags)
    try {
        const { admin } = await jwt.verify(token, secret)
        if (admin) {
            const result = await updateNews(id, header, text, tags)
            console.log(result)
            res.status(200).json(result)
        }
    } catch (error) {
        console.log('Catched error')
        res.status(400).send(error)
    }
}

module.exports = editNewsController