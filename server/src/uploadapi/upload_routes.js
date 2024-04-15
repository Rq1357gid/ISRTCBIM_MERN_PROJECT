const express = require('express');
const multer = require('multer');
const uploadController = require('./upload_controller');

const uploadRouters = express.Router();
const upload = multer({ dest: 'uploads/' });


const storage = multer.memoryStorage();
const uploadP = multer({ storage: storage });

uploadRouters.post('/uploadpdf', uploadP.single('pdf'), uploadController.uploadPdf);
uploadRouters.get('/getpdf', uploadController.getPdf)


uploadRouters.post('/upload', uploadController.uploadImages);
uploadRouters.get('/images', uploadController.getImages);


uploadRouters.post('/upload_video_l', uploadController.uploadVideoLink);
uploadRouters.get('/get_video_l', uploadController.getVideoLinks);

module.exports = uploadRouters;
