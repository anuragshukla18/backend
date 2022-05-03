const nodemailer = require("nodemailer");
// The credentials for the email account you want to send mail from.
const credentials = {
  host: "smtp.hostinger.in",
  port: 587,
  secure: false,
  auth: {
    // These environment variables will be pulled from the .env file
    user: "jaspreet@curiouswebs.in",
    pass: process.env.MAIL_PASSWORD,
  },   
  tls: {
    rejectUnauthorized: false,
  },
};
console.log("Mail password");
console.log(process.env.MAIL_PASSWORD);
module.exports.mailTransporter = nodemailer.createTransport(credentials);
