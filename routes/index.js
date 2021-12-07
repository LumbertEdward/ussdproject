var express = require('express');
const { GetHome } = require('../controllers');
var router = express.Router();
var urlencodedParser = express.urlencoded({ extended: true });

/* GET home page. */
router.post('/', urlencodedParser, GetHome);

module.exports = router;
