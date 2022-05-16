const app = require("express")();

// app.use("/auth", require("../components/auth/auth.routes"));
app.use("/questions", require("../components/question/question.routes"));
app.use("/users", require("../components/user/user.routes"));

module.exports = app;