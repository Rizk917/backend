// controllers/assesmentModel.js

const assesmentModel = require('../model/assesment');

// get all assessments
const getdata = async (req, res) => {
  try {
    const data = await assesmentModel.find();
    res.status(200).json(data);
  } catch (err) {
    res.json({ message: err });
  }
};

// create new assessment
const postdata = async (req, res) => {
  try {
    const { title, description } = req.body;
    const image = req.file ? req.file.path : '';
    const data = await assesmentModel.create({
      title,
      description,
      image
    });
    res.status(200).json(data);
  } catch (err) {
    res.json({ message: err });
  }
};

// edit existing assessment
const editdata = async (req, res) => {
  try {
    const { title, description } = req.body;
    const id = req.params.id;
    const image = req.file ? req.file.path : '';
    const data = await assesmentModel.findByIdAndUpdate(id, {
      title,
      description,
      image
    });
    res.status(200).json(data);
  } catch (err) {
    res.json({ message: err });
  }
};

// delete existing assessment
const deletedata = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await assesmentModel.findByIdAndDelete(id);
    res.status(200).json(data);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = {
  getdata,
  postdata,
  editdata,
  deletedata,
};
