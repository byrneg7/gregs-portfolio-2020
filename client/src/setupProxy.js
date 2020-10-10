const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(proxy("/api/test", { target: "http://localhost:9000" }));
  app.use(proxy("/api/contact", { target: "http://localhost:9000" }));
};
