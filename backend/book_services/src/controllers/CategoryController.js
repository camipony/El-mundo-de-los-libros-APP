const book = require('../database/models/Book');

const get_categorys = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Ah ocurrido un error"
        })
    }
}

const add_category = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Ah ocurrido un error"
        })
    }
}

const update_category = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Ah ocurrido un error"
        })
    }
}

const delete_category = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Ah ocurrido un error"
        })
    }
}

module.exports = {
    get_categorys,
    add_category, 
    update_category,
    delete_category
}