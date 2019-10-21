const express = require('express');
const tagNewsController = require('../../controllers/tagNewsController/tagNews.controller')

const tagNewsRouter = express.Router();

tagNewsRouter.get('/:tag', tagNewsController);


module.exports = tagNewsRouter