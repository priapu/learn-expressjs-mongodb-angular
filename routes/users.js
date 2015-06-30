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

/* DELETE a user. */
router.delete('/:id', function(req, res, next) {
    var db = req.db;
    var collection = db.get('usercollection');
    var userToDelete = req.params.id;
    collection.remove({'_id': userToDelete}, function(err){
        (err === null) ? message='User deleted successfully.' : message='Could not delete user.'
        res.json({
            'message': message
        });
    });
});

module.exports = router;
