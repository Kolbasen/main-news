'use strict'

const fs = require('fs')
const jwt = require('jsonwebtoken')
const { secret } = require('../../config/config')
const { deleteNews } = require('../../services/news/news.service')

async function deleteNewsController(req, res) {
    const { id } = req.body;
    console.log(req.body)
    try {
        const result = await deleteNews(id)
        console.log(result)
        const oldPhoto = result.oldFilename.dataValues.name;
        fs.unlink(`./static/${oldPhoto}`, (err) => {
            console.log(err)
        });
        res.status(200).json(result)
    } catch (error) {
        console.log('Deleting error')
    }
}

module.exports = deleteNewsController