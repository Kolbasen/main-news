const express = require('express');
const upload = require('../../middleware/photoUpload/upload')
const adminController = require('../../controllers/adminControllers/admin.controller')
const addNewsController = require('../../controllers/adminControllers/addNews.controller');
const editNewsController = require('../../controllers/adminControllers/editNews.controller')
const deleteNewsController = require('../../controllers/adminControllers/deleteNews.controller')
const loginController = require('../../controllers/adminControllers/login.controller');
const authMiddleware = require('../../middleware/auth/auth.middleware')
const addAdminController = require('../../controllers/adminControllers/addAdmin.controller')

const adminRouter = express.Router();

adminRouter.get('/', authMiddleware, adminController);

adminRouter.put('/add', authMiddleware, upload.single('photo'), addNewsController);

adminRouter.put('/edit',authMiddleware, upload.single('photo'), editNewsController);

adminRouter.put('/delete',authMiddleware, deleteNewsController);

adminRouter.post('/login', loginController);

adminRouter.put('/register', addAdminController)


module.exports = adminRouter;