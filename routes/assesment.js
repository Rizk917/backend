const express = require('express');

const router = express.Router();
const {
 postdata,
 getdata,
  } = require("../controllers/assesment");


router.route('/').get(getdata).post(postdata)



module.exports=router;