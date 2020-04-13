var express = require('express');
var router = express.Router();

const indexCtrl = require('../controllers/index')

/* GET home page. */
router.get('/', indexCtrl.getHomePage)
router.get('/posts/:postid', indexCtrl.getBlogPost)

module.exports = router;