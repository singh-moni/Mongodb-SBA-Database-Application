const { Router } = require('express');
const reviewsCtrl = require('../controllers/reviews.js');

const router = Router();

router.post('/', reviewsCtrl.createReview);
router.get('/:id',reviewsCtrl.getReviewById);
router.get('/', reviewsCtrl.getReviews);
router.patch('/:id', reviewsCtrl.updateReview);
router.delete('/:id', reviewsCtrl.deleteReview);

module.exports = router;

