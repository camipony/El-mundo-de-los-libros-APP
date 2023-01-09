const {
    Router
} = require('express');
const author_router = Router();

const {
    author_get,
    author_post,
    author_put,
    author_delete
} = require('../controllers/AuthorController');

author_router.get('/autores', author_get);

author_router.post('/autor', author_post);

author_router.put('/autor/:id', author_put);

author_router.delete('/autor/:id', author_delete);

module.exports = author_router;