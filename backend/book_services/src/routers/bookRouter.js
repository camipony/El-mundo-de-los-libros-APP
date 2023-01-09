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
    get_book,
    add_book,
    change_cover,
    update_book,
    delete_book,
    add_image
} = require('../controllers/BookController');

book_router.get(
    '/books', 
    get_books
);

book_router.get(
    '/book/:codigo',
    get_book
)

book_router.post(
    '/book',
    add_book
)

book_router.put(
    '/front-page/:codigo',
    storage.single('file'),
    upload, 
    change_cover
)

book_router.put(
    '/front-page/:codigo',
    storage.single('file'),
    upload, 
    add_image
)

book_router.put(
    '/book/:codigo',
    update_book
)

book_router.delete(
    '/book/:codigo',
    delete_book
)

module.exports = book_router;