const keys = require("../config/keys");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(keys.SENDGRID_API_KEY);

class Mailer {
  constructor(fromEmail, title, message) {
    this.message = {
      to: keys.RECEIVER_EMAIL,
      from: keys.SENDER_EMAIL,
      subject: title,
      text: message + `\n_______FROM: ${fromEmail}_______`,
    };
  }

  sendEmail() {
    return new Promise((resolve, reject) => {
      sgMail
        .send(this.message)
        .then(() => resolve("Message send successfully"))
        .catch((err) => reject.err.response.body);
    });
  }
}

module.exports = Mailer;
