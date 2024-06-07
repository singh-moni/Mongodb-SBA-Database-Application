const { Router } = require('express');
const authorsCtrl = require('../controllers/authors.js');

const router = Router();

// router.post('/', authorsCtrl.createAuthor);
// router.get('/:id',authorsCtrl.getAuthorById);
router.get('/', authorsCtrl.getAuthors);
// router.patch('/:id', authorsCtrl.updateAuthor);
// router.delete('/:id', authorsCtrl.deleteAuthor);

module.exports = router;
