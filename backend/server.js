'use strict'

require('dotenv').config()
const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const http = require('http');
const https = require('https');
const forceSsl = require('express-force-ssl');

const key  = fs.readFileSync(__dirname + '/ssl/server.key', 'utf8');
const cert = fs.readFileSync(__dirname + '/ssl/server.crt', 'utf8');
const ca = fs.readFileSync(__dirname + '/ssl/intermediate.crt', 'utf8')


const credentials = { key, cert, ca };

const httpsServer = https.createServer(credentials, app) 
const httpServer = http.createServer(app);
  

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

// app.use(forceSsl)
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
app.use(express.static(__dirname));
  app.use(express.static(path.join(__dirname, 'build')));
app.use('/api', mainPageRouter);

app.use('/api/news', oneNewsRouter);

app.use('/api/hotnews', hotNewsRouter);

app.use('/api/tags', tagNewsRouter);

app.use('/api/admin' ,amdminRouter);  

// if (+process.env.NODE_ENV == 'production') {
  // console.log('here is prod')
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
  })
// }

// httpsServer.listen(8443, () => console.log('https'))
httpServer.listen(8000, () => console.log('listening'));