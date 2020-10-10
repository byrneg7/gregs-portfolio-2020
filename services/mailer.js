const nodemailer = require("nodemailer");
const keys = require("../config/keys");

class Mailer {
  constructor(fromEmail, title, message) {
    this.mailOptions = {
      from: keys.SENDER_EMAIL,
      to: keys.RECEIVER_EMAIL,
      subject: title,
      text: message + `\n\n_______FROM: ${fromEmail}_______`,
    };
    this.mailer = nodemailer.createTransport({
      service: "gmail",
      secure: false,
      port: 25,
      auth: {
        user: keys.SENDER_EMAIL,
        pass: keys.EMAIL_PASS,
      },
    });
  }

  sendEmail() {
    return new Promise((resolve, reject) => {
      this.mailer.sendMail(this.mailOptions, (err, info) => {
        if (err) {
          reject(err);
        } else {
          resolve("Message send successfully");
        }
      });
    });
  }
}

module.exports = Mailer;
