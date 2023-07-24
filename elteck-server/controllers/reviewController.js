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
    const {uid, username,userimage } = req.body;
    if(username && userimage){
        //find all reviews with uid and update username and userimage
        try{
            const reviews = await Review.find({uid: uid});
            reviews.forEach(review => {
                review.username = username;
                review.userimage = userimage;
                review.save();
            });
            res.status(200).json({message: "success"});
        }catch(err){
            res.status(500).json({error: err});
        }
    }
    if(username && !userimage){
        //find all reviews with uid and update username
        try{
            const reviews = await Review.find({uid: uid});
            reviews.forEach(review => {
                review.username = username;
                review.save();
            });
            res.status(200).json({message: "success"});
        }catch(err){
            res.status(500).json({error: err});
        }
    }
    if(!username && userimage){
        //find all reviews with uid and update userimage
        try{
            const reviews = await Review.find({uid: uid});
            reviews.forEach(review => {
                review.userimage = userimage;
                review.save();
            });
            res.status(200).json({message: "success"});
        }catch(err){
            res.status(500).json({error: err});
        }
    }
}

module.exports = {
  getReviews,
  getLatestReviews,
  postReview,
};
