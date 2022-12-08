const mongoose = require('mongoose');

const book = new mongoose.Schema(
    {
        codigo: {
            type: String,
            unique: true,
            required: true
        },
        titulo:{
            type: String
        },
        descripcion: {
            type: String
        },
        portada: {
            type: String,
            default: "https://i.postimg.cc/XJ9Kyhb9/libros.png"
        },
        precio: {
            type: mongoose.Decimal128,
            default: 0
        },
        estado: {
            type: String,
            default: "activo"
        },
        fecha_publicacion: {
            type: Date
        },
        fecha_actualizacion: {
            type: Date,
            default: new Date().toISOString()
        },
        fecha_creacion: {
            type: Date,
            default: new Date().toISOString()
        }
    },
    {
        versionKey: false,
        timestamps: false
    }
)

module.exports = mongoose.model('book', book)