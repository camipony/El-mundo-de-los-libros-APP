const {
    Router
} = require('express');
const category_router = Router();

const {
    get_categories,
    get_category,
    add_category,
    edit_category,
    delete_category
} = require('../controllers/CategoryController')

category_router.get('/categoria', get_categories);

category_router.get('/categoria/:id', get_category);

category_router.post('/categoria', add_category);

category_router.put('/categoria/:id', edit_category);

category_router.delete('/categoria/:id', delete_category);



module.exports = category_router