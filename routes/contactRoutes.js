const Mailer = require("../services/mailer");

module.exports = (app) => {
  app.post("/api/contact", async (req, res) => {
    const { from, title, message } = req.body[0];
    const mailer = new Mailer(from, title, message);
    await mailer
      .sendEmail()
      .then(() => {
        console.log("success");
        res.send({ contact: "success" });
      })
      .catch((err) => {
        console.log("error: ", err);
        res.status(500).send({ contact: "failure" });
      });
  });
};
