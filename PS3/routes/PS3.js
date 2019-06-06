
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/ps3', function(req, res, next) {
  res.render('part_b', { title: 'How to make an app' });
});

router.post('/ps3', function (req, res) {
  // console.log(req.body)
  res.render('part_c', { name: req.body.name, length: req.body.name.length });
})

module.exports = router;
