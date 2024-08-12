const dotenv = require('dotenv');

// Load environment variables from the .env file
dotenv.config({ path: './.env' });

const configVariables = {
    PORT: process.env.PORT,
    MONGODB_URL: process.env.MONGODB_URL,
    CLOUDINARY_SECRET: process.env.CLOUDINARY_API_SECRET,
    CLOUDINARY_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_PUBLIC: process.env.CLOUDINARY_API_KEY,
};

module.exports = configVariables;
