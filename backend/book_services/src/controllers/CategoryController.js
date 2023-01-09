const category = require('../data/models/category');

const get_categorys = async (req, res) => {
    try {
        category.find({}, (err, docs) => {
            if(err){
                res.status(400).json({
                    msg: "Ha ocurrido un error",
                    error: err
                })
                return
            }
            res.json({
                categorys:docs
            })
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Ah ocurrido un error"
        })
    }
}

const get_category = async (req, res) => {
    try {
        const id = req.params.id;
        category.findOne({_id: id}, (err, docs) => {
            if(err){
                res.status(400).json({
                    msg: "Ha ocurrido un error",
                    error: err
                })
                return
            }
            res.json({
                category: docs
            })
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Ah ocurrido un error"
        })
    }
}

const add_category = async (req, res) => {
    try {
        const datos = req.body;
        category.create(
            datos,
            (err, docs) => {
                if( err ){
                    res.status(400).json({
                        msg: "Ha ocurrido un error",
                        error: err
                    })
                    return
                }
                res.status(201).json({
                    msg: "Categoria agregado con exito",
                    data: docs
                })
            }
        )
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Ah ocurrido un error"
        })
    }
}

const update_category = async (req, res) => {
    try {
        const {id} = req.params
        const data = req.body
        category.findOne({_id: id}, (err, docs) => {
            if(err){
                res.status(400).json({
                    msg: "Ha ocurrido un error",
                    error: err
                })
                return
            }
            docs = data
            docs.save((error, docs) => {
                if(error){
                    res.status(400).json({
                        msg: "Ha ocurrido un erro",
                        error: error
                    })
                    return
                }
                res.status(200).json({
                    msg: "Ctegoria actualizado",
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

const delete_category = async (req, res) => {
    try {
        const {id} = req.params
        category.deleteOne({_id: id}, (err) => {
            if(err) {
                res.status(400).json({
                    msg: "Ha ocurrido un error",
                    error: err
                })
                return 
            }
            res.status(200).json({
                msg: "La categoria fue eliminado"
            })
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Ah ocurrido un error"
        })
    }
}

module.exports = {
    get_categorys,
    get_category,
    add_category, 
    update_category,
    delete_category
}