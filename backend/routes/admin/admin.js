const express = require('express');
const adminController = require('../../controllers/adminControllers/admin.controller')
const addNewsController = require('../../controllers/adminControllers/addNews.controller');
const editNewsController = require('../../controllers/adminControllers/editNews.controller')
const deleteNewsController = require('../../controllers/adminControllers/deleteNews.controller')
const loginController = require('../../controllers/adminControllers/login.controller');

const adminRouter = express.Router();

adminRouter.get('/:token', adminController);

adminRouter.post('/add', addNewsController);

adminRouter.put('/edit', editNewsController);

adminRouter.put('/delete', deleteNewsController);

adminRouter.post('/login', loginController);


module.exports = adminRouter;