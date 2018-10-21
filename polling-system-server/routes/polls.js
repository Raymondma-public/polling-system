var express = require('express');
var router = express.Router();
var pollService = require('../services/polls');

/* GET users listing. */
router.get('/', function(req, res, next) {
  pollService.getAll().then((content)=>{
    res.send(content);
  }).catch((err)=>{
    res.send(err);
  });
});

module.exports = router;
