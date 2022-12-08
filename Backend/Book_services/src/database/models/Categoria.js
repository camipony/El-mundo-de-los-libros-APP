const mongoose = require('mongoose');

const categoria = new mongoose.Schema(
    {
        id_libro: {
            type: Integer
        },
        categoria: {
            type: String
        }
    }
)

module.exports = mongoose.model('categoria', categoria)