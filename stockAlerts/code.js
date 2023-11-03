require('dotenv').config();
const nodemailer = require('nodemailer');

// Create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: process.env.sandbox.smtp.mailtrap.io,
  port: parseInt(process.env.MAILTRAP_PORT, 25),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.2fd623b7582b1d, // generated Mailtrap user
    pass: process.env.45f370556e3a0c, // generated Mailtrap password
  },
});

// Setup email data with unicode symbols
let mailOptions = {
  from: '"Example Team" <from@example.com>', // sender address
  to: 'to@example.com', // list of receivers
  subject: 'Hello ✔', // Subject line
  text: 'Hello world?', // plain text body
  html: '<b>Hello world?</b>' // html body
};

// Send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message sent: %s', info.messageId);
});

