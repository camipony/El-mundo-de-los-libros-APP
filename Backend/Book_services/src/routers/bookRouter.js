const {
    Router
} = require('express');
const book_router = Router();

const {
    upload,
    storage
} = require('../middleware/uploanImage')

const  {
    get_books,
    add_book
} = require('../controllers/BookController');

book_router.get('/books', get_books);

book_router.post(
    '/book',
    storage.single('file'),
    upload,
    add_book
)

module.exports = book_router;