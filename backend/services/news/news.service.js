const { News } = require('../../models/news');

News.create({
    name: 'Andrew',
    text: 'Some Shiiiit'
}).then( res => console.log(res))
  .catch(err => console.log(err))