const express = require('express');
const router = express.Router({mergeParams: true});

/* GET reviews index /posts/:id/reviews */
router.get('/', function(req, res, next) {
    res.send('INDEX /posts/:id/reviews');
  });

  /* POST reviews create /posts/:id/reviews */
router.post('/', function(req, res, next) {
    res.send('CREATE /posts/:id/reviews/new');
  });

  /* GET reviews edit /posts/:id/reviews/:review_id/edit */
router.get('/:review_id/edit', function(req, res, next) {
    res.send('EDIT /posts/:id/reviews/:review_id/edit');
  });

  /* PUT reviews update /posts/:id/reviews/:review_id */
router.put('/:review_id', function(req, res, next) {
    res.send('UPDATE /posts/:id/reviews/:review_id');
  });

  /* DELETE reviews destroy /posts/:id/reviews/:review_id */
router.delete('/:review_id', function(req, res, next) {
    res.send('DELETE /posts/:id/reviews/:review_id');
  });
  
  module.exports = router;