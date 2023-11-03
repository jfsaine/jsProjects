require('dotenv').config();
const nodemailer = require('nodemailer');

// Create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_HOST,
    port: parseInt(process.env.MAILTRAP_PORT, 10),
    secure: false, // since Mailtrap doesn't require a secure connection
    auth: {
      user: process.env.MAILTRAP_USER, // use the variable name here, not the value directly
      pass: process.env.MAILTRAP_PASS,
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

// nt