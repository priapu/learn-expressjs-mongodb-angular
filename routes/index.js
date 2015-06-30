var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', function(req, res, next){
    res.render('helloworld', {title: 'Big fat hello world'})
});

router.get('/user_list', function(req, res, next){
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({}, {}, function(e, docs){
        res.render('userlist', {
            'userlist': docs
        });
    });
});

router.get('/user_new', function(req, res, next){
    res.render('usernew', {title: 'Big fat form to add user'})
});

router.post('/user_add', function(req, res, next){
    var db = req.db;
    var collection = db.get('usercollection');
    var inputUsername = req.body.username;
    var inputEmail = req.body.email;

    collection.insert({
        "username": inputUsername,
        "email": inputEmail
    }, function(err, doc){
        if (err) {
            res.send("There was a problem inserting to the database.");
        } else {
            res.redirect('/user_list');
        }
    });
});

module.exports = router;
