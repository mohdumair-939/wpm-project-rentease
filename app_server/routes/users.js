const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');
router.get('/', ctrlMain.index);
module.exports = router;router.get('/', ctrlMain.index);
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;