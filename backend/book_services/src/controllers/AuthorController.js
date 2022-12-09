const book = require('../database/models/Book');

const get_author = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Ah ocurrido un error"
        })
    }
}

const add_author = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Ah ocurrido un error"
        })
    }
}

const update_author = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Ah ocurrido un error"
        })
    }
}

const delete_author = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Ah ocurrido un error"
        })
    }
}

module.exports = {
    get_author,
    add_author,
    update_author,
    delete_author
}