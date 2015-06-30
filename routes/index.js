var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', function(req, res,next){
    res.render('helloworld', {title: 'Big fat hell world'})
});

module.exports = router;
