const book = require('../database/models/Book');

const add_format_book = async (req, res) => {
    try {
        const codigo = req.params;
        const {formato, idiomas} = req.body
        book.findOne(codigo, (err, docs) => {
            if(err){
                res.status(400).json({
                    msg: "Ha ocurrido un error",
                    error: err
                })
                return
            }
            docs.formato = [...docs.formato, {formato: formato, idiomas: idiomas}]
            docs.save((error, docs) => {
                if(error){
                    res.status(400).json({
                        msg: "Ha ocurrido un erro",
                        error: error
                    })
                    return
                }
                res.status(200).json({
                    msg: "Libro actualizado",
                    book: docs
                })
            })
        } )
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Ah ocurrido un error"
        })
    }
}

const add_languages_book = async (req, res) => {
    try {
        const codigo = req.params;
        const {formato, idiomas} = req.body
        book.findOne(codigo, (err, docs) => {
            if(err){
                res.status(400).json({
                    msg: "Ha ocurrido un error",
                    error: err
                })
                return
            }
            docs.formato = docs.formato.map( format => {
                if( format.formato && format.formato === formato ){
                    return {formato: formato, idiomas: [...format.idiomas, idiomas]}
                }
                return format
            } )
            docs.save((error, docs) => {
                if(error){
                    res.status(400).json({
                        msg: "Ha ocurrido un erro",
                        error: error
                    })
                    return
                }
                res.status(200).json({
                    msg: "Libro actualizado",
                    book: docs
                })
            })
        } )
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Ah ocurrido un error"
        })
    }
}

const remove_format_book = async (req, res) => {
    try {
        const {codigo, formato} = req.params;
        book.findOne(codigo, (err, docs) => {
            if(err){
                res.status(400).json({
                    msg: "Ha ocurrido un error",
                    error: err
                })
                return
            }
            docs.formato = docs.formato.filter( format => format.formato != formato )
            docs.save((error, docs) => {
                if(error){
                    res.status(400).json({
                        msg: "Ha ocurrido un erro",
                        error: error
                    })
                    return
                }
                res.status(200).json({
                    msg: "Libro actualizado",
                    book: docs
                })
            })
        } )
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Ah ocurrido un error"
        })
    }
}

const remove_languages_book = async (req, res) => {
    try {
        const {codigo, formato, idioma} = req.params;
        book.findOne(codigo, (err, docs) => {
            if(err){
                res.status(400).json({
                    msg: "Ha ocurrido un error",
                    error: err
                })
                return
            }
            docs.formato = docs.formato.map( format => {
                if( format.formato && format.formato === formato ){
                    return {
                        formato: formato, 
                        idiomas: format.idioma.filter( idiom => idiom != idioma )
                    }
                }
                return format
            } )
            docs.save((error, docs) => {
                if(error){
                    res.status(400).json({
                        msg: "Ha ocurrido un erro",
                        error: error
                    })
                    return
                }
                res.status(200).json({
                    msg: "Libro actualizado",
                    book: docs
                })
            })
        } )
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Ah ocurrido un error"
        })
    }
}

module.exports = {
    add_format_book,
    add_languages_book,
    remove_format_book,
    remove_languages_book
}