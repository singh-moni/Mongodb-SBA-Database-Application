const mongoose = require('mongoose');
const{ Schema, model} = require('../config/db-connection');

const reviewSchema = new Schema({
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true,
    },
    reviewer: {
        type: String,
        required: true,
        trim: true,
    },
    content: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    date: {
        type: Date,
        default: Date.now,
    },

    
})
reviewSchema.index({ book: 1 });
reviewSchema.index({ reviewer: 1 });

//create the model that will control the collection
module.exports = model('Review', reviewSchema);
 