const { getOneNews } = require('../../services/news/news.service');

async function oneNewsController(req, res) {
    const { id } = req.params;
    console.log('ID IS HERE')
    console.log(id)
    try {
        const result = await getOneNews(id);
        if (result.errors) {
            return res.status(400).json(result.errors[0].message);
        } else {
            return res.status(200).json(result);
        }
    } catch (error) {
        console.log('Catched error: ')
        console.log(error)
    }
}
module.exports = oneNewsController;