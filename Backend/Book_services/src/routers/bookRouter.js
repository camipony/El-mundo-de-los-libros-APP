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
    add_book,
    change_cover
} = require('../controllers/BookController');

book_router.get(
    '/books', 
    get_books
);

book_router.post(
    '/book',
    add_book
)

book_router.put(
    '/front_page/:codigo',
    storage.single('file'),
    upload, 
    change_cover
)

module.exports = book_router;