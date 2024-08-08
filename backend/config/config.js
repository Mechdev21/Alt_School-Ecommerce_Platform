const dotenv = require('dotenv');

dotenv.config('./env');

const configVariables = {
    PORT: process.env.PORT,
    MONGODB_URL: process.env.MONGODB_URL
};

module.exports = configVariables;