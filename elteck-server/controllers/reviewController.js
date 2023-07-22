const Review = require('../models/reviewModel');


function getReviews(req, res) {
    Review.find({}, (err, reviews) => {
        if (err) {
            res.status(500).json({ error: err });
        }
        res.status(200).json(reviews);
    });
}

function getLatestReviews(req, res) {
    const limit = Number(req.query.limit) || 0;

    Review.find().sort({ created_at: -1 }).limit(limit).then((reviews) => {
        res.status(200).json(reviews);
    }).catch((err) => {
        res.status(500).json({ error: err });
    });
}

module.exports = {
    getReviews,
    getLatestReviews,

};