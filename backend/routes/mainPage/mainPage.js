const express = require('express');
const mainPageController = require('../../controllers/mainPageController/mainPage.controller.js')
const addNewsController = require('../../controllers/addNewsController/addNews.controller');
const mainPageRouter = express.Router();

mainPageRouter.get('/', mainPageController);

mainPageRouter.post('/add', addNewsController);

module.exports = mainPageRouter