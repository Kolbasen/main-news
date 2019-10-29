'use strict'
const fs = require('fs')
const { updateNews } = require('../../services/news/news.service')

async function editNewsController(req, res) {
    const { id, shortHeader, header, text, tags } = req.body;
    const photo = req.file;
    console.log(photo)
    // console.log(id, shortHeader,header, text, tags)
    try {
        if (photo){
            const result = await updateNews(id, shortHeader, header, text, tags, photo.filename);
            const oldFilename = result.oldFilename.dataValues.filename;
            fs.unlink(`./static/${oldFilename}`, (err) => {
                console.log(err)
            });
            res.status(200).json(result)
        } else {
            const result = await updateNews(id, shortHeader, header, text, tags);
            res.status(200).json(result)
        }
    } catch (error) {
        console.log('Catched error')
        console.log(error)
        res.status(400).send(error)
    }
}

module.exports = editNewsController