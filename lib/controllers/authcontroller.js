const cors = require("cors");
const jwt = require('jsonwebtoken')
const key = require('../router/authorize/secretkey')
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
let Users = require('../models/User_model');

module.exports = app => {
  const opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = key.secret;

  new JwtStrategy(opts, (jwt_payload, done) => {
    User.findById(jwt_payload.id)
      .then(user => {
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      })
      .catch(err => console.log(err));
  });

  app.post("/auth/login", cors(), (req, res) => {
    Users.findOne({ email: req.body.email }).then(user => {
      if (!user) {
        return res.send("usuario no existe");
      }

      const options = { expiresIn: 2592000 };
      const payload = {
        id: user._id,
        firstName: user.firstName
      };

      jwt.sign(payload, key.secret, options, (err, token) => {
        if (err) {
          res.json({ success: false, token: token });
        } else {
          res.json({ success: true, token: token });
        }
      });
    });
  });
};
