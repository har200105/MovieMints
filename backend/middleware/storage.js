const multer = require('multer');
const storage = multer.diskStorage({});

const imageFileFilter = (req, file, cb) => {
    if (!file.mimetype.startsWith('image')) {
        cb('Image Files Only Allowed', false);
    }
    cb(null, true);
};



const videoFileFilter = (req, file, cb) => {
    if (!file.mimetype.startsWith('video')) {
        cb('Image Files Only Allowed', false);
    }
    cb(null, true);
};

const uploadImage = multer({ storage: storage, fileFilter: imageFileFilter });
const uploadVideo = multer({ storage: storage, fileFilter: videoFileFilter });
module.exports = {uploadImage,uploadVideo};