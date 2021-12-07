var express = require('express');
const { GetHome } = require('../controllers');
var router = express.Router();

/* GET home page. */
router.post('/', GetHome);

module.exports = router;
