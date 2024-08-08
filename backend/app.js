const express = require('express');
const connectMongoDB = require('./config/db.config');
const configVariables = require('./config/config');

const app = express();

connectMongoDB();

app.use(express.json());
app.use((err, req, res, next) => {
    res.status(500).json({err : err.message});
});

module.exports = app;