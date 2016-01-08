var express = require('express');
var router = express.Router();

/* GET home. */
router.get('/', function(req, res, next) {
  res.redirect('/sign-in');
});

/* GET sign in. */
router.get('/sign-in', function(req, res, next) {
  res.render('index');
});

/* POST sign in. */
router.post('/sign-in', function(req, res, next) {
  res.render('sign_up');
});

/* GET sign up. */
router.get('/sign-up', function(req, res, next) {
  res.render('sign_up');
});

/* POST sign up. */
router.post('/sign-up', function(req, res, next) {
  
  res.render('sign_up');
});

module.exports = router;
