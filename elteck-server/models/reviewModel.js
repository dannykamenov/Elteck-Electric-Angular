const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    uid: String,
    title: String,
    content: String,
    rating: Number,
    date: Date,
    username: String,
    useremail: String,
    userimage: String,
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;