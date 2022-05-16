const express = require("express");
const cors = require('cors');

const app = express();

// App middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routers
app.use(require("./routes"));

module.exports = app;