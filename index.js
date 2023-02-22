const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const connection = require("./config/db");
const assesmentRoute = require("./routes/assesment");

mongoose.set("strictQuery", true);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
connection();
const conn = mongoose.connection;
app.use(express.json());
app.use("/assesment",assesmentRoute);

const port = process.env.PORT || 3000;
app.listen(port, console.log(`Listening on port ${port}...`));
