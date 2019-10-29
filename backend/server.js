'use strict'

require('dotenv').config()
const express = require('express');
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
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.header(
      'Access-Control-Allow-Credentials', 'true'
    );
    next();
  });

app.use('/', mainPageRouter);

app.use('/news', oneNewsRouter);

app.use('/hotnews', hotNewsRouter);

app.use('/tags', tagNewsRouter);

app.use('/admin' ,amdminRouter);  

app.listen(8000);