const { getReviews, getLatestReviews, postReview, updateUserInfo, averageRating, getMyReviews, deleteReview, getReview, updateReview } = require('../controllers/reviewController');
const { adminDashboard } = require('../controllers/adminDashboard');

const router = require('express').Router();

router.get('/reviews', getReviews);
router.get('/latest', getLatestReviews);
router.post('/reviews', postReview);
router.post('/update', updateUserInfo)
router.get('/average', averageRating)
router.get('/myreviews', getMyReviews)
router.delete('/reviews/:id', deleteReview);
router.get('/reviews/:id', getReview);
router.put('/reviews/:id', updateReview);
router.post('/admin', adminDashboard);


module.exports = router;