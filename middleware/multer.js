// middleware/multer.js

const multer = require('multer');

// configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '_' + file.originalname);
  }
});

// configure multer upload
const upload = multer({ storage });

module.exports = upload;
