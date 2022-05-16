const express = require("express");
const cors = require('cors');
const path = require('path');

const app = express();

// App middlewares
app.use(cors())
app.use('/', express.static(path.join(__dirname, '../', '/public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routers
app.use(require("./routes"));

module.exports = app;