'use strict'
const fs = require('fs')
const { updateNews } = require('../../services/news/news.service')

async function editNewsController(req, res) {
    const { id, header, text, tags } = req.body;
    const photo = req.file;
    console.log(id, header, text, tags)
    try {
        const result = await updateNews(id, header, text, tags, photo.filename)
        console.log(result.oldFilename.dataValues.name)
        const oldFilename = result.oldFilename.dataValues.name;
        fs.unlink(`./static/${oldFilename}`, (err) => {
            console.log(err)
        });
        res.status(200).json(result)
    } catch (error) {
        console.log('Catched error')
        console.log(error)
        res.status(400).send(error)
    }
}

module.exports = editNewsController