const multer = require('multer');

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'static')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const fileFilter = (req, file, cb) => {
    console.log('here')
    console.log(req.body)
    if (file.mimetype === "image/png" || 
        file.mimetype === "image/jpg"|| 
        file.mimetype === "image/jpeg"
    ) {
        cb(null, true);
    }
    else {
        console.log('Not valid type')
        cb(null, false);
    }
}

const upload = multer({storage: storageConfig, fileFilter: fileFilter})

module.exports = upload;