const mongoose = require('mongoose');

const book = new mongoose.Schema(
    {
        codigo: {
            type: String,
            unique: true,
            required: true
        },
        titulo: { type: String, default: "" },
        descripcion: { type: String, default: "" },
        portada: {
            type: String,
            default: "https://i.postimg.cc/XJ9Kyhb9/libros.png"
        },
        precio: {
            type: Number,
            default: 0
        },
        estado: { type: String, default: "activo" },
        categoria: [],
        calificaciones: [],
        fecha_publicacion: Date,
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