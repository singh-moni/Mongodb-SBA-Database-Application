const { Router } = require('express');
const booksCtrl = require('../controllers/books.js');

const router = Router();

router.post('/', booksCtrl.createBook);
router.get('/:id',booksCtrl.getBookById);
router.get('/', booksCtrl.getBooks);
router.patch('/:id', booksCtrl.updateBook);
router.delete('/:id', booksCtrl.deleteBook);

module.exports = router;
