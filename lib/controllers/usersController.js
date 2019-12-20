var Users = require("../models/User_model");
const cors = require("cors");

module.exports = app => {
  app.post("/saveUser", cors(), (req, res) => {
    const request = req.body;
    if (request && request.email !== "") {
      Users.find({ email: request.email },
        (err, results) => {
          if (results.length > 0 || err) {
            res.send("error: mail existe");
          } else {
            const newUser = new Users({
              firstName: request.firstName,
              lastName: request.lastName,
              email: request.email,
              password: request.password,
            });
            newUser.save().then(user => {
              res.send(user);
            })
          }
        })
    } else {
      res.send("empty request");
    }
  });
}
