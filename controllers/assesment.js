const express = require("express");
const assesmentModel = require("../model/assesment");


const getdata = async (req, res) => {
    const index = await assesmentModel.findById(req.params.id);
    console.log(index);
    if (!index) {
      try {
        const data = await assesmentModel.find();
        console.log(data);
        res.status(200).json(data);
      } catch (err) {
        res.json({ message: err });
      }
    } };

    const postdata = async (req, res) => {
        if (!req.body) {
          res.status(400).json({ message: "Error no data" });
        } else {
          const data = await assesmentModel.create({
            title: req.body.title,
            description: req.body.description,
          });
          return res.status(200).json(data);
        }
      };
      module.exports = {
      getdata,
      postdata,
      };