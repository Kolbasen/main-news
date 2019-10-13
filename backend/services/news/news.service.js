const { News } = require('../../models/news');

const insertNews = async (name, text) => {
  try {
    const res = await News.create({
      name: name,
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
    console.log('Getting error: ')
    console.log(error)
    return error;
  }
}

module.exports = {
  getNews,  
  insertNews,
  getOneNews
};