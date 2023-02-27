// routes/assesment.js

const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer');
const {
  postdata,
  getdata,
  editdata,
  deletedata,
} = require("../controllers/assesment");

// routes
router.route('/')
  .get(getdata)
  .post(upload.single('file'), postdata);

router.route('/:id')
  .put(editdata)
  .delete(deletedata);

module.exports = router;
