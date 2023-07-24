const { getReviews, getLatestReviews, postReview, updateUserInfo } = require('../controllers/reviewController');

const router = require('express').Router();

router.get('/reviews', getReviews);
router.get('/latest', getLatestReviews);
router.post('/reviews', postReview);
router.post('/update', updateUserInfo)


module.exports = router;