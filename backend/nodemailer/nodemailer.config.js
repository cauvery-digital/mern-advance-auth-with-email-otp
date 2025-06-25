// lib/mailer.js  – APP PASSWORD VERSION
import nodemailer from 'nodemailer';
import dotenv from "dotenv";
dotenv.config();

export const transporter = nodemailer.createTransport({
  service: process.env.SMTP_SERVICE,           // sets host, port & TLS automatically
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});
export const sender = { 
  name: "GEI",
  email: 'nilesh007us@gmail.com',
 };
transporter.verify().then(() => console.log('✔ Gmail SMTP (app-password) ready ✅'));
// transporter.sendMail({
//   from: process.env.MAIL_FROM,
//   to: "geetaelectronicsandinfosys@gmail.com",
//   subject: "Hello from nodmailer test ✔",
//   html: `<h1>Hello from nodmailer test ✔</h1>`,
// }).then(()=>console.log('email sent successfully')).catch(console.error);


// const sendMail = (to, subject, html) =>
//   transporter.sendMail({
//     from: process.env.MAIL_FROM,
//     to,
//     subject,
//     html,
//   });
//   export default sendMail;