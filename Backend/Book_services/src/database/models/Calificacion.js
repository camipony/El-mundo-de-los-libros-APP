const mongoose = require('mongoose');

const calificacion = new mongoose.Schema(
    {
        id_libro: {
            type: Integer
        },
        id_usuario: {
            type: Integer
        },
        calificacion: {
            type: Integer,
            default: 0
        },
        comentario: {
            type: String
        },
        fecha_creacion: {
            type: Date
        }
    }
)

module.exports = mongoose.model('calificacion', calificacion)