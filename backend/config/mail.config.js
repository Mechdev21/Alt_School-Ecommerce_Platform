const nodemailer = require('nodemailer');
const configVariables = require('./config');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: configVariables.EMAIL_USERNAME,
        pass: configVariables.EMAIL_PASSWORD,
    },
});

module.exports = transporter;
