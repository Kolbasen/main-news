const { getOneNews } = require('../../services/news/news.service');

async function oneNewsController(req, res) {
    const { id } = req.params;
    try {
        const result = await getOneNews(id);
        const filename = result.photo.filename;
        result.info.photo = `static/${filename}`;
        if (result.errors) {
            return res.status(400).json(result.errors[0].message);
        } else {
            return res.status(200).json(result.info);
        }
    } catch (error) {
        console.log('Catched error: ')
        console.log(error)
    }
}
module.exports = oneNewsController;