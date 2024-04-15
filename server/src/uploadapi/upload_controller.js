// const Image = require('./upload_schema');
// const Pdf = require('./upload_schema');

// exports.uploadImages = async (req, res) => {
//   try {
//     if (!req.files || req.files.length === 0) {
//       return res.status(400).send('No files uploaded.');
//     }

//     const images = req.files.map(file => ({
//       filename: file.filename,
//       originalName: file.originalname,
//       mimeType: file.mimetype,
//       size: file.size,
//       path: file.path,
//     }));

//     await Image.insertMany(images);
    
//     res.send('Files uploaded successfully.');
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Error saving to database.');
//   }
// };


// exports.getImages = async (req, res) => {
//   try {
//     const images = await Image.find();
//     res.json(images);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Error fetching images from database.');
//   }
// };

// const uploadPdf = async (req, res) => {
//   try {
//     const { originalname, buffer } = req.file;

//     const newPdf = new Pdf({
//       name: originalname,
//       data: buffer
//     });

//     await newPdf.save();

//     res.status(201).send('PDF uploaded successfully');
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Error uploading PDF');
//   }
// };

// module.exports = { uploadPdf };

// const Image = require('./upload_schema'); // Assuming Image is the schema for handling images
// const Pdf = require('./upload_schema'); // Assuming Pdf is the schema for handling PDFs

// // Function for handling image uploads
// exports.uploadImages = async (req, res) => {
//   try {
//     if (!req.files || req.files.length === 0) {
//       return res.status(400).send('No files uploaded.');
//     }

//     const images = req.files.map(file => ({
//       filename: file.filename,
//       originalName: file.originalname,
//       mimeType: file.mimetype,
//       size: file.size,
//       path: file.path,
//     }));

//     await Image.insertMany(images);
    
//     res.send('Files uploaded successfully.');
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Error saving images to database.');
//   }
// };

// // Function for fetching images
// exports.getImages = async (req, res) => {
//   try {
//     const images = await Image.find();
//     res.json(images);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Error fetching images from database.');
//   }
// };

// // Function for uploading PDFs
// exports.uploadPdf = async (req, res) => {
//   try {
//     const { originalname, buffer } = req.file;

//     const newPdf = new Pdf({
//       name: originalname,
//       data: buffer
//     });

//     await newPdf.save();

//     res.status(201).send('PDF uploaded successfully');
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Error uploading PDF');
//   }
// };


const { image, pdf, Video } = require('./upload_schema');

// exports.uploadImages = async (req, res) => {
//   try {
//     if (!req.files || req.files.length === 0) {
//       return res.status(400).send('No files uploaded.');
//     }

//     const images = req.files.map(file => ({
//       filename: file.filename,
//       originalName: file.originalname,
//       mimeType: file.mimetype,
//       size: file.size,
//       path: file.path,
//     }));

//     await image.insertMany(images); // Using image model
    
//     res.send('Files uploaded successfully.');
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Error saving images to database.');
//   }
// };



exports.uploadImages = async (req, res) => {
  try {
    const { title, link } = req.body;

    
    const newImage = new image({
      title: title,
      link: link
    });

    
    await newImage.save();

    res.status(201).send('PDF link uploaded successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error uploading Pdf link');
  }
};


exports.getImages = async (req, res) => {
  try {
    const images = await image.find(); // Using image model
    res.json(images);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching images from database.');
  }
};

// exports.uploadPdf = async (req, res) => {
//   try {
//     const { originalname, buffer } = req.file;

//     const newPdf = new pdf({ // Using pdf model
//       name: originalname,
//       data: buffer
//     });

//     await newPdf.save();

//     res.status(201).send('PDF uploaded successfully');
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Error uploading PDF');
//   }
// };


exports.uploadPdf = async (req, res) => {
  try {
    const { title, link } = req.body;

    
    const newPdf = new pdf({
      title: title,
      link: link
    });

    
    await newPdf.save();

    res.status(201).send('PDF link uploaded successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error uploading Pdf link');
  }
};


exports.getPdf = async (req, res) => {
  try {
    const pdfs = await pdf.find();
    res.json(pdfs);
  }catch (err) {

    console.error(err);
    res.status(500).send('Error fetching images from database.');

  }
}

exports.uploadVideoLink = async (req, res) => {
  try {
    const { title, link } = req.body;

    
    const newVideo = new Video({
      title: title,
      link: link
    });

    
    await newVideo.save();

    res.status(201).send('Video link uploaded successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error uploading video link');
  }
};

exports.getVideoLinks = async (req, res) => {
  try {
    
    const videoLinks = await Video.find({}, 'title link');

    res.json(videoLinks);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching video links');
  }
};