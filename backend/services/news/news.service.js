const { News } = require('../../models/news');

const insertNews = async (name, tags, text) => {
  try {
    const res = await News.create({
      name: name,
      tags: tags,
      text: text,
    })
    return res;
  } catch (error) {
    console.log('Insertion error: ')
    console.log(error);
    return error;
  }
}

const getNews = async () => {
  try {
    const res = await News.findAll({ raw: true});
    console.log(res);
    return res;
  } catch (error) {
    console.log('Getting error: ')
    console.log(error)
    return error;
  }
}

const getOneNews = async id => {
  try {
    const res = await News.findOne({where: {id: id}, raw: true })
    console.log(res)
    return res;
  } catch (error) {
    console.log('Getting one news error: ')
    // console.log(error)
    return error;
  }
}

const getLastNewsFromTags = async () => {
   try {
     const [
       world, 
       politics, 
       ukraine, 
       russia, 
       technology
      ] = await Promise.all([
        News.findAll({where: {tags: 'world'}, raw: true}),
        News.findAll({where: {tags: 'politics'}, raw: true}),
        News.findAll({where: {tags: 'ukraine'}, raw: true}),
        News.findAll({where: {tags: 'russia'}, raw: true}),
        News.findAll({where: {tags: 'technology'}, raw: true}),
      ])
      return {
        world, 
        politics, 
        ukraine, 
        russia, 
        technology
      }
   } catch (error) {
     console.log('Tags finding error')
   }
}

module.exports = {
  getNews,  
  insertNews,
  getOneNews,
  getLastNewsFromTags
};