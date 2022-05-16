const { response } = require("express");
const fs = require('fs');
const path = require('path');



module.exports = async function (req, res = response) {
    try {
      const storage = path.join(__dirname, '../', '../', '../', 'data', 'data.json')
      const rawdata = fs.readFileSync(storage);
      let users = JSON.parse(rawdata);

      const user = req.body;      

      if (user.score > 0){
        users.push(user);
        fs.writeFileSync(storage, JSON.stringify(users,null,2));
      }

      res.status(200).send({
        message: "save"
      });
    } catch (error) {
        res.status(400).send({
            message: error
          });
    }
  };