const mongoose = require('mongoose');
const configVariables = require('./config');

const connectMongoDB = () => {
    mongoose
    .connect(configVariables.MONGODB_URL)
    .then(() => {
        console.log('MongoDB connection successful');
    })
    .catch((err) => {
        throw new Error(`MongoDB connection error: ${err.message}`);
    });
};

module.exports = connectMongoDB;

