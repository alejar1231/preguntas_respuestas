const { response } = require("express");
const fs = require('fs');
const path = require('path');

module.exports = async function (req, res = response) {
    try {
      const storage = path.join(__dirname, '../', '../', '../', 'data', 'data.json')
      let rawdata = fs.readFileSync(storage);
      let users = JSON.parse(rawdata);

        res.status(200).send({
            send: users
          });
    } catch (error) {
        res.status(400).send({
            message: error
          });
    }
  };