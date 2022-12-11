const nodemailer = require('nodemailer')

exports.generateMailTransporter = () =>
    nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    service:"gmail",
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
});