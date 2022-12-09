const book = require('../database/models/Book');
const provider = require('../database/models/Provider');

const get_providers = async (req, res) => {
    try {
        provider.find({}, (err, docs) => {
            if(err){
                res.status(400).json({
                    msg: "ha ocurrido un error",
                    error: err
                })
                return
            }
            res.status(201).json({
                providers: docs
            })
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Ah ocurrido un error"
        })
    }
}

const get_provider = async (req, res) => {
    try {
        const _id = req.params;
        provider.findOne(_id, (err, docs) => {
            if(err){
                res.status(400).json({
                    msg: "ha ocurrido un error",
                    error: err
                })
                return
            }
            res.status(201).json({
                provider: docs
            })
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Ah ocurrido un error"
        })
    }
}

const add_provider = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Ah ocurrido un error"
        })
    }
}

const update_provider = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Ah ocurrido un error"
        })
    }
}

const delete_provider = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Ah ocurrido un error"
        })
    }
}

module.exports = {
    get_providers,
    get_provider,
    add_provider,
    update_provider,
    delete_provider
}