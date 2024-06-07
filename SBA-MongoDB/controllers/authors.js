const Author = require('../models/Author.js');


module.exports = {
  createAuthor,getAuthorById,getAuthors,updateAuthor,deleteAuthor
};

async function createAuthor(req, res) {
  try {
    const author = await Author.create(req.body);

    res.status(200).json(author);
  } catch (err) {
    res.status(400).json('name should be unique ,birthdate required');
  }
}
// Get Author by ID
async function getAuthorById(req, res) {
  try {
    const author = await Author.findById(req.params.id);

    res.status(200).json(author);
  } catch (err) {
    res.status(400).send(err);
  }
}
//Get Authors
async function getAuthors(req, res) {
  try {
    const authors = await Author.find({});

    res.status(200).json(authors);
  } catch (err) {
    res.status(400).send(err);
  }
}

// Update a single author by ID
async function updateAuthor(req, res) {
  try {
    const updatedAuthor = await Author.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(updatedAuthor);
  } catch (err) {
    res.status(400).send(err);
  }
}

// Delte a single user by ID
async function deleteAuthor(req, res) {
  try {
    await Author.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: 'Successfully Deleted the Author',
    });
  } catch (err) {
    res.status(400).send(err);
  }
}