const { getReviews, getLatestReviews, postReview, updateUserInfo, averageRating, getMyReviews, deleteReview } = require('../controllers/reviewController');

const router = require('express').Router();

router.get('/reviews', getReviews);
router.get('/latest', getLatestReviews);
router.post('/reviews', postReview);
router.post('/update', updateUserInfo)
router.get('/average', averageRating)
router.get('/myreviews', getMyReviews)
router.delete('/reviews/:id', deleteReview);


module.exports = router;