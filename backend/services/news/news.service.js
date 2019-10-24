const { News, Photo } = require('../../models/news');

const insertNews = async (name, tags, text, filename) => {
  try {
    const info = await News.create({
      name: name,
      tags: tags,
      text: text,
    })
    const photo = await Photo.create({
      name: filename
    })
    const res = await info.setPhoto(photo);
    return res;
  } catch (error) {
    console.log('Insertion error: ')
    console.log(error);
    return error;
  }
}

const getNews = async () => {
  try {
    const res = await News.findAll({ raw: true, include:[{model: Photo, attributes: ['name', 'newsId'] }]});
    // console.log(res);
    return res;
  } catch (error) {
    console.log('Getting error: ')
    console.log(error)
    return error;
  }
}

const updateNews = async (id, name, text, tags, filename) => {
  console.log(id, name, text, tags, filename)
  try {
      const info = await News.update({
        name, 
        text,
        tags
      }, {
        where: {id: id}, 
      })
      const oldFilename = await Photo.findOne({
        where: {newsId: id}
      })
      const photo = await Photo.update({
        name: filename
      }, {
        where: { newsId: id },
      })
      const res = { info, photo, oldFilename }
      return res;
  } catch (error) {
    console.log('Updating news error')
  }
}

const deleteNews = async id => {
  try {
    const oldFilename = await Photo.findOne({where: {newsId: id}})
    const info = await News.destroy({where: {id: id}});
    const photo = await Photo.destroy({where: { newsId: id}}) 
    return { info, oldFilename, photo };
  } catch (error) {
    console.log('Deleting error')
  }
}

const getOneNews = async id => {
  try {
    const info = await News.findOne({where: {id: id}, raw: true })
    const photo = await Photo.findOne({where: {newsId: id}})
    return { info, photo };
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
    const info = await News.findAll({where: {tags: tag}, include:[{model: Photo, attributes: ['name', 'newsId'] }], raw: true})
    return info
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