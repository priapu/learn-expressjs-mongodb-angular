var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({}, {}, function(e, docs){
      res.json(docs);
  });
});

/* POST a user. */
router.post('/', function(req, res, next) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.insert(req.body, function(err, result){
        (err === null) ? message='User inserted successfully.' : message='Could not insert user.'
        res.json({
            'message': message
        });
    });
});

module.exports = router;
