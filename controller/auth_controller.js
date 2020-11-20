let database = require("../database");

let authController = {
  login: (req, res) => {
    res.locals.item = "login"
    res.render('auth/login')
  },

  register: (req, res) => {
    res.locals.item = "register"
    res.render('auth/register')
  },

  loginSubmit: (req, res) => {
    // implement
  },

  registerSubmit: (req, res) => {
    // implement
  }
}

module.exports = authController;
