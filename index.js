const fs = require('fs');
const nodemailer = require("nodemailer");

// 1. Check if alerts are enabled
const status = fs.readFileSync('./enabled.txt', 'utf-8').trim();
if (status !== "ON") {
  console.log("🔕 Alert system is OFF. No mail will be sent.");
  process.exit();
}

// 2. Continue to send email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '',
    pass: ''
  }
});

const mailOptions = {
  from: '',
  to: '',
  subject: '🔓 Laptop Unlocked',
  text: `Laptop unlocked at ${new Date().toLocaleString()}`
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log("❌ Error: " + error);
  }
  console.log('✅ Email sent: ' + info.response);
});
