const {
    Router
} = require('express');
const author_router = Router();

const {
    author_get,
    author_post,
    author_put,
    delete_author
} = require('../controllers/AuthorController');

author_router.get('/author', author_get)
author_router.post ('/author', author_post)
author_router.put ('/author/:id', author_put)
author_router.delete ('/author/:id', delete_author)

module.exports = author_router;