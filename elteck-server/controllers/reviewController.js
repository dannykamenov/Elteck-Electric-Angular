const Review = require("../models/reviewModel");

function getReviews(req, res) {
    Review.find()
        .then((reviews) => {
        res.status(200).json(reviews);
        })
        .catch((err) => {
        res.status(500).json({ error: err });
        });
}

function getLatestReviews(req, res) {
  const limit = Number(req.query.limit) || 0;

  Review.find()
    .sort({ created_at: -1 })
    .limit(limit)
    .then((reviews) => {
      res.status(200).json(reviews);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}

async function postReview(req, res) {
    const { uid, title, content, rating, username, useremail, userimage, isAuth } = req.body;
    try {
        if(isAuth){
            const review = await Review.create({
                uid,
                title,
                content,
                rating,
                username,
                useremail,
                userimage,
            });
            res.status(201).json(review);
        } else {
            res.status(401).json({ error: 'Not authorized' });
        }
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

module.exports = {
  getReviews,
  getLatestReviews,
  postReview,

};
