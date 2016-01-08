var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var authController = new Controller();

authController.signIn = function() {
  this.render();
}
authController.signUp = function() {

  console.log(this.param('username'));
  this.render();
}

module.exports = authController;