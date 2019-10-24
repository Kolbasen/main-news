const { Photo } = require('../../models/photo')

async function uploadPhotoController(req, res) {
    const file = req.file;
    const body = req.body;
    console.log('aaaaaaa')
    console.log(file, body)
    res.json('Uploaded')
}

module.exports = uploadPhotoController
