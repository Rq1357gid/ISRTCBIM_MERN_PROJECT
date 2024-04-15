const mongoose = require('mongoose');

// const imageSchema = new mongoose.Schema({
//   filename: String,
//   originalName: String,
//   mimeType: String,
//   size: Number,
//   path: String,
// });

const imageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
const pdfSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const pdf = mongoose.model('pdf', pdfSchema);
const image = mongoose.model('image', imageSchema);
const Video = mongoose.model('Video', videoSchema);



module.exports = {image, pdf, Video};