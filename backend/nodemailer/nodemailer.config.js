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
transporter
  .verify()
  .then(() => console.log("📡 SMTP ⚙️  (app-password-checked)✔️  📝 ready to send emails ✈️  ✔"))
  .catch( (error) => {
    console.log(`\n❌ Error check your credentials: ${error.message}\n`);
    process.exit(1); // 1 is failure, 0 status code is success
  });
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