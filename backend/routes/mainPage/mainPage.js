const express = require('express');
const { mainPageController } = require('../../controllers/mainPageController/mainPage.controller.js')

const mainPageRouter = express.Router();

mainPageRouter.get('/', mainPageController);

module.exports = mainPageRouter