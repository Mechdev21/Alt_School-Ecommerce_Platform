const express = require('express');
const connectMongoDB = require('./config/db.config');
const configVariables = require('./config/config');
const cloudinary = require('cloudinary').v2;
require('dotenv').config(); 
const routeHandler = require('./routes');

const app = express();


connectMongoDB();


cloudinary.config({
    cloud_name: configVariables.CLOUDINARY_NAME,
    api_key: configVariables.CLOUDINARY_PUBLIC,
    api_secret: configVariables.CLOUDINARY_SECRET,
});


app.use(express.json());


app.use('/', routeHandler);


app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

module.exports = app;
