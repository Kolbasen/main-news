const { getNewsFromOneTag } = require('../../services/news/news.service')

async function TagNewsController(req, res)  {
    const { tag } = req.params;
    try {
        const result = await getNewsFromOneTag(tag)
        return res.status(200).json(result)
    } catch (error) {
        console.log('One tag sending error')
    }
}

module.exports = TagNewsController