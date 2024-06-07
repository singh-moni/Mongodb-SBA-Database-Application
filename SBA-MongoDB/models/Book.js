const mongoose = require('mongoose');
const{ Schema, model} = require('../config/db-connection');

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    author: {
        type: String,
        ref: 'Author',
       
    },
    publishedDate: {
        type: Date,
        required: true,
    },
    genres: {
        type: [String],
        required: true,
    },
    
});
bookSchema.index({ title: 1 });
bookSchema.index({ author: 1 });

//create the model that will control the collection
module.exports = model('Book', bookSchema);
 