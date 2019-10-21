'use strict'

const jwt = require('jsonwebtoken')
const { secret } = require('../../config/config')
const { deleteNews } = require('../../services/news/news.service')

async function deleteNewsController(req, res) {
    const { id } = req.body;
    console.log(req.body)
    try {
        const { admin } = await jwt.verify(token, secret)
        if (admin) {
            const result = await deleteNews(id)
            console.log(result)
            res.status(200).json( result)
        }
    } catch (error) {
        console.log('Deleting error')
    }
}

module.exports = deleteNewsController