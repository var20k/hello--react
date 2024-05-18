const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGO_ATLAS_URI)
    .then(() => console.log("Connected with Database"))
    .catch((err) => console.log(err));

const productsRoutes = require('./productsRoutes');

app.use('/apiv1/products', productsRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Backend deployed successfully</h1>");
});

app.listen(port, () => {
  console.log(`Server is up and running at port ${port}`);
});

//npm i -g nodemon
//npm install express mongoose cookie-parser body-parser cors dotenv
//nodemon index.js