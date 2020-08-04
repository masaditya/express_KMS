const User = require("../models/User");
const authBcrypt = require("../utils/authBcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  register: (req, res) => {
    authBcrypt.hashPassword(req.body.password, 12, (err, hash) => {
      if (!err) {
        const newPassword = hash;
        User.create({
          ...req.body,
          password: hash,
        }).then(result => {
          res.json({
            success: true,
            data: result,
          });
        });
      }
    });
  },

  login: (req, res) => {
    const { username, password } = req.body;
    const jwtSecret = process.env.JWTSECRET || "";

    User.findOne({
      where: {
        username: username,
      },
    }).then(result => {
      authBcrypt.compare(password, result.password, (error, match) => {
        if (match) {
          jwt.sign(
            {
              id_user: result.id_user,
              username: result.username,
            },
            jwtSecret,
            (error, token) => {
              res.json({
                success: true,
                token: token,
              });
            }
          );
        }
      });
    });
  },
};
