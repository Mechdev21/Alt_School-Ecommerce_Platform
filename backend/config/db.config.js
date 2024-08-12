const mongoose = require('mongoose');
const configVariables = require('./config');

const connectMongoDB = () => {
    mongoose
    .connect(configVariables.MONGODB_URL)
    .then( () => {
        console.log('Mongodb connection successful');
    })
    .catch( (err) => {
        throw new Error('err', err.message);
    })
};

module.exports = connectMongoDB