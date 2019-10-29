const { News, Photo } = require('../../models/news');

const insertNews = async (shortHeader, header, tags, text, filename) => {
  try {
    const info = await News.create({
      shortHeader,
      header,
      tags,
      text,
    })
    const photo = await Photo.create({
      filename
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
    const res = await News.findAll({ raw: true, include:[{model: Photo, attributes: ['filename', 'newsId'] }]});
    // console.log(res);
    return res;
  } catch (error) {
    console.log('Getting error: ')
    console.log(error)
    return error;
  }
}

const updateNews = async (id, shortHeader, header, text, tags, filename) => {
  console.log(id, shortHeader, header, text, tags, filename)
  try {
      const info = await News.update({
        shortHeader,
        header, 
        text,
        tags
      }, {
        where: {id: id}, 
      })
      if (filename) {
        const oldFilename = await Photo.findOne({
          where: {newsId: id}
        })
        const photo = await Photo.update({
          filename
        }, {
          where: { newsId: id },
        })
        const res = { info, photo, oldFilename }
        return res;
      }
      return { info }
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
    const info = await News.findAll({where: {tags: tag}, include:[{model: Photo, attributes: ['filename', 'newsId'] }], raw: true})
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