'use strict'

const { getLastNewsFromTags } =  require('../../services/news/news.service')

async function hotNewsController(req, res) {
    try {
        const result = await getLastNewsFromTags();
        const hotNewsArray = [];
        for (let key in result ) {
            const latestNewsFromEachTag = result[key].reduce((accum, curr) => (
                Date.parse(curr.createdAt) > Date.parse(accum.createdAt) ? 
                    accum = curr : 
                    accum
                ), 
                {createdAt: 0}
            );
            hotNewsArray.push(latestNewsFromEachTag)
        }
        return res.status(200).json(hotNewsArray)
    } catch (error) {
        console.log('Hot news controler error')
        console.log(error)
    }
}
    


module.exports = hotNewsController;