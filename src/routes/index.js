const app = require("express")();

app.use("/api", require("./api"));

module.exports = app;