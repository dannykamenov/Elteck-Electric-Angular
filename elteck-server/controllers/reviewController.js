const Review = require("../models/reviewModel");

function getReviews(req, res) {
  Review.find()
    .sort({ created_at: -1 })
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
  const {
    uid,
    title,
    content,
    rating,
    username,
    useremail,
    userimage,
    isAuth,
  } = req.body;
  try {
    if (isAuth) {
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
      res.status(401).json({ error: "Not authorized" });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
}

async function updateUserInfo(req, res) {
    const {uid, username} = req.body;
    try {
        const review = await Review.updateMany({uid}, {username});
        res.status(201).json(review);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

async function averageRating(req,res) {
    try {
        const reviews = await Review.find();
        const ratings = reviews.map(review => review.rating);
        const averageRating = ratings.reduce((acc, curr) => acc + curr) / ratings.length;
        res.status(200).json({averageRating});
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

async function getMyReviews(req, res) {
    const {uid} = req.query;
    try {
        const reviews = await Review.find({uid});
        res.status(200).json(reviews);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

module.exports = {
  getReviews,
  getLatestReviews,
  postReview,
  updateUserInfo,
  averageRating,
  getMyReviews
};
