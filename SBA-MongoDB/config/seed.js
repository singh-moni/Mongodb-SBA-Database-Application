// Require connection file to connect
const mongoose = require('./db-connection.js');

// Require Models for delete and create operations
const Author = require('../models/Author.js');
const Book = require('../models/Book.js');
const Review = require('../models/Review.js');

// Sample Data
const authors = [
  {
    name: 'J.K. Rowling',
    birthdate: '1965-07-31'
  },
  {
    name: 'George R.R. Martin',
    birthdate: '1948-09-20'
  },
  {
    name: 'J.R.R. Tolkien',
    birthdate: '1892-01-03'
  },
];

const books = [
  {
    title: 'Harry Potter and the Philosopher\'s Stone',
   
    publishedDate: '1997-06-26',
    genres: ['Fantasy', 'Adventure'],
  },
  {
    title: 'A Game of Thrones',
   
    publishedDate: '1996-08-06',
    genres: ['Fantasy', 'Political', 'Drama'],
  },
  {
    title: 'The Hobbit',
   
    publishedDate: '1937-09-21',
    genres: ['Fantasy', 'Adventure'],
  },
];

const reviews = [
  {
   
    reviewer: 'John Doe',
    content: 'Amazing book! A must-read for everyone.',
    rating: 5,
    date: '2023-06-01'
  },
  {
    // book will be populated dynamically after books are created
    reviewer: 'Jane Smith',
    content: 'Intriguing and full of surprises.',
    rating: 4,
    date: '2023-06-02'
  },
  {
    // book will be populated dynamically after books are created
    reviewer: 'Alice Johnson',
    content: 'A timeless classic with deep characters and a rich world.',
    rating: 5,
    date: '2023-06-03'
  },
];

async function seed() {
    try {
      await Author.deleteMany({});
      await Book.deleteMany({});
      await Review.deleteMany({});
  
      const createdAuthors = await Author.create(authors);
      console.log('Authors: ', createdAuthors);
  
      const createdBooks = await Book.create(books);
      console.log('Books: ', createdBooks);
  
      const createdReviews = await Review.create(reviews);
      console.log('Reviews: ', createdReviews);
  
      await mongoose.connection.close();
    } catch (err) {
      console.log(err);
    }
  }
  
  seed();