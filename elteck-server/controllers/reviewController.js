const Review = require('../models/reviewModel');


function getReviews(req, res) {
    Review.find({}, (err, reviews) => {
        if (err) {
            res.send(err);
        }
        res.status(200).json(reviews);
    });
}

module.exports = {
    getReviews,
};