'use strict'

require('dotenv').config()
const express = require('express');
const path = require('path');
const app = express();
const hotNewsRouter = require('./routes/hotNews/hotNews');
const oneNewsRouter = require('./routes/oneNews/oneNews');
const mainPageRouter = require('./routes/mainPage/mainPage');
const tagNewsRouter = require('./routes/tagNews/tagNews')
const amdminRouter = require('./routes/admin/admin')

const bodyParser = require('body-parser');

const sequelize = require('./config/sequelize');

sequelize.sync().then(result=>{
  // console.log(result);
})
.catch(err=> console.log(1));

app.use('/static', express.static('static'))
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Methods',
      'POST, PUT, GET, DELETE'
    );
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization, CurrentId'
    );
    res.header(
      'Access-Control-Allow-Credentials', 'true'
    );
    next();
  });

  console.log(process.env.NODE_ENV)
console.log(1)
app.use(express.static(__dirname));
  app.use(express.static(path.join(__dirname, 'build')));
  console.log(2)
app.use('/api', mainPageRouter);

app.use('/api/news', oneNewsRouter);

app.use('/api/hotnews', hotNewsRouter);

app.use('/api/tags', tagNewsRouter);

app.use('/api/admin' ,amdminRouter);  

if (process.env.NODE_ENV == 'production') {
  
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
  })
}

app.listen(process.env.PORT || 8000);