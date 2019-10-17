const express = require('express');

const oneNewsController = require('../../controllers/oneNewsController.js/oneNews.controller')

const oneNewsRouter = express.Router();

oneNewsRouter.get('/:id', oneNewsController);

module.exports = oneNewsRouter