const mongoose = require('../config/db-connection'); // Correct import path

const Author = require('../models/Author');
const Book = require('../models/Book');
const Review = require('../models/Review');

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
  {
    name: 'Jane Austen',
    birthdate: '1775-12-16'
  },
  {
    name: 'George Orwell',
    birthdate: '1903-06-25'
  },
  {
    name: 'Mark Twain',
    birthdate: '1835-11-30'
  }
];

const books = [
  {
    title: 'Harry Potter and the Philosopher\'s Stone',
    authorName: 'J.K. Rowling',
    publishedDate: '1997-06-26',
    genres: ['Fantasy', 'Adventure'],
  },
  {
    title: 'A Game of Thrones',
    authorName: 'George R.R. Martin',
    publishedDate: '1996-08-06',
    genres: ['Fantasy', 'Political', 'Drama'],
  },
  {
    title: 'The Hobbit',
    authorName: 'J.R.R. Tolkien',
    publishedDate: '1937-09-21',
    genres: ['Fantasy', 'Adventure'],
  },
  {
    title: 'Pride and Prejudice',
    authorName: 'Jane Austen',
    publishedDate: '1813-01-28',
    genres: ['Romance', 'Classic'],
  },
  {
    title: '1984',
    authorName: 'George Orwell',
    publishedDate: '1949-06-08',
    genres: ['Dystopian', 'Science Fiction'],
  },
  {
    title: 'Adventures of Huckleberry Finn',
    authorName: 'Mark Twain',
    publishedDate: '1884-12-10',
    genres: ['Adventure', 'Classic'],
  }
];

const reviews = [
  {
    bookTitle: "Harry Potter and the Philosopher's Stone",
    reviewer: 'John Doe',
    content: 'Amazing book! A must-read for everyone.',
    rating: 5,
    date: '2023-06-01'
  },
  {
    bookTitle: "A Game of Thrones",
    reviewer: 'Jane Smith',
    content: 'Intriguing and full of surprises.',
    rating: 4,
    date: '2023-06-02'
  },
  {
    bookTitle: "The Hobbit",
    reviewer: 'Alice Johnson',
    content: 'A timeless classic with deep characters and a rich world.',
    rating: 5,
    date: '2023-06-03'
  },
  {
    bookTitle: "Pride and Prejudice",
    reviewer: 'Emily Davis',
    content: 'A brilliant critique of society with memorable characters.',
    rating: 5,
    date: '2023-06-04'
  },
  {
    bookTitle: "1984",
    reviewer: 'Michael Brown',
    content: 'A chilling vision of the future that feels all too real.',
    rating: 4,
    date: '2023-06-05'
  },
  {
    bookTitle: "Adventures of Huckleberry Finn",
    reviewer: 'Chris Wilson',
    content: 'An adventure that captures the essence of freedom and friendship.',
    rating: 5,
    date: '2023-06-06'
  }
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