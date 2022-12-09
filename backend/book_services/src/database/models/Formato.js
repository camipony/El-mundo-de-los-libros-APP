const mongoose = require('mongoose');

const formato = new mongoose.Schema(
    {
        id_libro: {
            type: Integer
        },
        formato: {
            type: String
        },
        estado: {
            type: String
        }
    }
)

module.exports = mongoose.model('formato', formato)