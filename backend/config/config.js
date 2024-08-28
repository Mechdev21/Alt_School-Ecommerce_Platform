const dotenv = require('dotenv');

// Load environment variables from the .env file
dotenv.config({ path: './.env' });

const configVariables = {
    PORT: process.env.PORT,
    MONGODB_URL: process.env.MONGODB_URL,
    CLOUDINARY_SECRET: process.env.CLOUDINARY_API_SECRET,
    CLOUDINARY_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_PUBLIC: process.env.CLOUDINARY_API_KEY,
    JWT_TOKEN: process.env.JWT_TOKEN,
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === 'true',
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
    CLIENT_URL: process.env.CLIENT_URL 
};



module.exports = configVariables;
>>>>>>> user-admin-feature
