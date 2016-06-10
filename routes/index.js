var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'express'});
  console.log(res.json);
});

module.exports = router;
