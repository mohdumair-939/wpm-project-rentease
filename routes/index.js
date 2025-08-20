var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'RentEase',
    pages: [
      'Homepage',
      'Search Bar',
      'Listing Details',
      'Login/Register',
      'Payment Gateway',
      'Owner Dashboard',
      'Profile Page'
    ]
  });
});

module.exports = router;
