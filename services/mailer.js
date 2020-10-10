const nodemailer = require("nodemailer");
const keys = require("../config/keys");

class Mailer {
  constructor(fromEmail, title, message) {
    this.mailOptions = {
      from: fromEmail,
      to: keys.RECEIVER_EMAIL,
      subject: title,
      text: message,
    };
  }

  sendEmail() {
    nodemailer
      .createTransport({
        service: "gmail",
        secure: false,
        port: 25,
        auth: {
          user: keys.SENDER_EMAIL,
          pass: keys.EMAIL_PASS,
        },
      })
      .sendMail(this.mailOptions, (err, info) => {
        if (err) {
          console.log("error: ", err);
        } else {
          console.log("email send successfully: ", info);
        }
      });
  }
}

module.exports = Mailer;
