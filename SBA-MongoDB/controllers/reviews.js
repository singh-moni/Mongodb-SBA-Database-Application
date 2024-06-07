const Review = require('../models/Review.js');


module.exports = {
    createReview,getReviewById,getReviews,updateReview,deleteReview
};

async function createReview(req, res) {
  try {
    const review = await Review.create(req.body);

    res.status(200).json(review);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}
// Get Review by ID
async function getReviewById(req, res) {
  try {
    const review = await Review.findById(req.params.id);

    res.status(200).json(review);
  } catch (err) {
    res.status(400).send(err);
  }
}
//Get reviews
async function getReviews(req, res) {
  try {
    const reviews = await Review.find({});

    res.status(200).json(reviews);
  } catch (err) {
    res.status(400).send(err);
  }
}

// Update a single review by ID
async function updateReview(req, res) {
  try {
    const updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(updatedReview);
  } catch (err) {
    res.status(400).send(err);
  }
}

// Delete a single review by ID
async function deleteReview(req, res) {
  try {
    await Review.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: 'Successfully Deleted the Review',
    });
  } catch (err) {
    res.status(400).send(err);
  }
}