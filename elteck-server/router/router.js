const { getReviews, getLatestReviews, postReview } = require('../controllers/reviewController');

const router = require('express').Router();

router.get('/reviews', getReviews);
router.get('/latest', getLatestReviews);
router.post('/reviews', postReview)


module.exports = router;