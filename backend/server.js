'use strict'

const express = require('express');
const app = express();
const hotNewsRouter = require('./routes/hotNews/hotNews');
const mainPageRouter = require('./routes/mainPage/mainPage');

const bodyParser = require('body-parser');

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

app.use('/hotnews', hotNewsRouter);

app.listen(8000);