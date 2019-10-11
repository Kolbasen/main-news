const express = require('express');
const { hotNewsController } = require('../../controllers/hotNewsController/hotNews.controller')

const hotNewsRouter = express.Router();

hotNewsRouter.get('/', hotNewsController);

module.exports = hotNewsRouter;