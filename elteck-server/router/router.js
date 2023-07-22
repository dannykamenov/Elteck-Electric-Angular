const { getReviews, getLatestReviews } = require('../controllers/reviewController');

const router = require('express').Router();

router.get('/reviews', getReviews);
router.get('/latest', getLatestReviews);


module.exports = router;