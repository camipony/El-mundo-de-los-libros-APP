import axios from 'axios'

const run_axios = async ( ruta ) => {
    try {
        let data = await axios.get(ruta)
        return data
    } catch (error) {
        console.log(error)
    }
}

const get_calificacion = (data, ruta) => {
    let _data = data.map( async calif => {
        let user = run_axios(ruta)
        calif.usuario = user.data[0]
        return calif
    })
    return _data
} 

module.exports = {
    run_axios,
    get_calificacion
}