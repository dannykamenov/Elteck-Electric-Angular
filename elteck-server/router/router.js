const { getReviews } = require('../controllers/reviewController');

const router = require('express').Router();

router.get('/reviews', getReviews)


module.exports = router;