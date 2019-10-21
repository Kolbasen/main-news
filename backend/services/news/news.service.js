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

const updateNews = async (id, name, text, tags) => {
  console.log(id, name, text, tags)
  try {
    const res = await News.update({
      name, 
      text,
      tags
    }, {
      where: {id: id}, 
    })
    return res;
  } catch (error) {
    console.log('Updating news error')
  }
}

const deleteNews = async id => {
  try {
    const res = await News.destroy({where: {id: id}});
    return res;
  } catch (error) {
    console.log('Deleting error')
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

const getNewsFromOneTag = async tag => {
  try {
    const res = await News.findAll({where: {tags: tag}, raw: true})
    console.log(res)
    return res
  } catch (error) {
    console.log('Tag news finding error')
    console.log(error)
  }
}

module.exports = {
  getNews,  
  insertNews,
  getOneNews,
  getLastNewsFromTags,
  getNewsFromOneTag,
  updateNews, 
  deleteNews
};