const Book = require('../models/Book.js');


module.exports = {
    createBook,getBookById,getBooks,updateBook,deleteBook
};

async function createBook(req, res) {
  try {
    const book = await Book.create(req.body);

    res.status(200).json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}
// Get Book by ID
async function getBookById(req, res) {
  try {
    const book = await Book.findById(req.params.id);

    res.status(200).json(book);
  } catch (err) {
    res.status(400).send(err);
  }
}
//Get books
async function getBooks(req, res) {
  try {
    const books = await Book.find({});

    res.status(200).json(books);
  } catch (err) {
    res.status(400).send(err);
  }
}

// Update a single book by ID
async function updateBook(req, res) {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(updatedBook);
  } catch (err) {
    res.status(400).send(err);
  }
}

// Delete a single book by ID
async function deleteBook(req, res) {
  try {
    await Book.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: 'Successfully Deleted the Book',
    });
  } catch (err) {
    res.status(400).send(err);
  }
}