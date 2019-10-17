const express = require('express');
const adminController = require('../../controllers/adminController/admin.controller')
const addNewsController = require('../../controllers/addNewsController/addNews.controller');

const adminRouter = express.Router();

adminRouter.get('/', adminController);

adminRouter.post('/add', addNewsController);

module.exports = adminRouter;