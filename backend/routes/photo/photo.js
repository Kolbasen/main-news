const express = require('express');

const uploadPhotoController = require('../../controllers/photoController/uploadPhoto.controller')

const photoRouter = express.Router();

photoRouter.put('/upload', uploadPhotoController);

module.exports = photoRouter