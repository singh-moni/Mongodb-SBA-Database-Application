Library Management System
This project is a Library Management System API built with Node.js, Express, and MongoDB. It allows users to manage books, authors, and reviews with CRUD operations. The system is designed to illustrate the efficient use of MongoDB indexes and validation rules, ensuring data consistency and optimal query performance.

Features
Manage authors, books, and reviews
CRUD operations for each entity
MongoDB indexing for efficient queries
Data validation to ensure consistency
Setup
Prerequisites
Node.js (>= 12.0.0)
MongoDB (>= 4.0.0)



API Endpoints
Authors
GET /api/authors - Get all authors
GET /api/authors/:id - Get a specific author by ID
POST /api/authors - Create a new author
PUT /api/authors/:id - Update an existing author
DELETE /api/authors/:id - Delete an author
Books
GET /api/books - Get all books
GET /api/books/:id - Get a specific book by ID
POST /api/books - Create a new book
PUT /api/books/:id - Update an existing book
DELETE /api/books/:id - Delete a book
Reviews
GET /api/reviews - Get all reviews
GET /api/reviews/:id - Get a specific review by ID
POST /api/reviews - Create a new review
PUT /api/reviews/:id - Update an existing review
DELETE /api/reviews/:id - Delete a review