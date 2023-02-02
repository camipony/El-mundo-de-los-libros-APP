import axios from 'axios'

const rutaMicroBook = 'http://localhost:4000';
const rutaMicroUser = 'http://localhost:8000/';

export const resolvers = {
    Query: {
        hello: () => {
            return "Hello world!"
        },
        getBooks: async () => {
            try {
                let data = await axios.get(rutaMicroBook + '/books')
                return data.data.book
            } catch (error) {
                console.log(error)
            }
        },
        getBook: async (root, {codigo}) => {
            try {
                let data = await axios.get(rutaMicroBook + '/book/' + codigo)
                return data.data.book
            } catch (error) {
                console.log(error)
            }
        },
        getAutores: async () => {
            try {
                let data = await axios.get(rutaMicroBook + '/autores')
                return data.data.autores
            } catch (error) {
                console.log(error)
            }
        },
        getCategoria: async () => {
            try {
                let data = await axios.get(rutaMicroBook + '/categorias')
                return data.data.categories
            } catch (error) {
                console.log(error)
            }
        },
        getProveedor: async () => {
            try {
                let data = await axios.get(rutaMicroBook + '/providers')
                return data.data.categories
            } catch (error) {
                console.log(error)
            }
        },
        getCart: async (_, {ident}) => {
            try {
                let data = await axios.get('http://localhost:8000/method/cart/123456789/')
                console.log(data)
                return " Hello "
            } catch (error) {
                console.log(error)
            }
        }
    },

    Mutation: {
        createBook: async (_, { book }) => {
            try {
                let data = await axios.post( rutaMicroBook + '/book/', book)
                return data.data.msg
            } catch (error) {
                console.log(error)
            }
        }
    }
};