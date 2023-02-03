import axios from 'axios'
import {
    run_axios,
    get_calificacion
} from './middleware';

const rutaMicroBook = 'http://localhost:4000';
const rutaMicroUser = 'http://127.0.0.1:8000';

export const resolvers = {
    Query: {
        hello: () => {
            return "Hello world!"
        },
        getBooks: () => {
            try {
                let data = run_axios(rutaMicroBook + '/books')
                data.data.book.calificaciones = get_calificacion(
                    data.data.book.calificaciones, 
                    rutaMicroUser+'/user/'+calif.usuario+'/'
                )
                return data.data.book
            } catch (error) {
                console.log(error)
            }
        },
        getBooksForUserLogin: (_, {ident}) => {
            try {
                let data = run_axios(rutaMicroBook + '/books')
                data.data.book.calificaciones = get_calificacion(
                    data.data.book.calificaciones, 
                    rutaMicroUser+'/user/'+calif.usuario+'/'
                )
                let favorite = run_axios(rutaMicroUser+'/favorites/'+ident+'/')
                let purchased = run_axios(rutaMicroUser+'/purchased/'+ident+'/')
                data.data.book = data.data.book.map(book => {
                    let filter = favorite.data.filter(b => b.codigo === book.codigo)
                    let filter2 = purchased.data.filter(b => b.codigo   === book.codigo)
                    if(  filter && filter > 0 ){
                        book.is_favorite = true
                    } 
                    else {
                        book.is_favorite = false
                    }

                    if(  filter2 && filter2 > 0 ){
                        book.is_mine = true
                    } 
                    else {
                        book.is_mine = false
                    }

                    return book
                })
                return data.data.book
            } catch (error) {
                console.log(error)
            }
        },
        getBook: (root, {codigo}) => {
            try {
                let data = run_axios(rutaMicroBook + '/book/' + codigo)
                data.data.book.calificaciones = get_calificacion(
                    data.data.book.calificaciones, 
                    rutaMicroUser+'/user/'+calif.usuario+'/'
                )
                return data.data.book
            } catch (error) {
                console.log(error)
            }
        },
        getBookForUserLogin: (_, {codigo, ident}) => {
            try {
                let data = run_axios(rutaMicroBook + '/book/' + codigo)
                data.data.book.calificaciones = get_calificacion(
                    data.data.book.calificaciones, 
                    rutaMicroUser+'/user/'+calif.usuario+'/'
                )
                let favorite = run_axios(rutaMicroUser+'/favoritesbook/'+ident+'/'+codigo+'/')
                let purchased = run_axios(rutaMicroUser+'/purchasedbook/'+ident+'/'+codigo+'/')
                if( favorite.data && favorite.data.length > 0 ){
                    data.data.book.is_favorite = true
                } 
                else {
                    data.data.book.is_favorite = false
                }

                if(  purchased.data && purchased.data > 0 ){
                    book.is_mine = true
                } 
                else {
                    book.is_mine = false
                }

                return data.data.book
            } catch (error) {
                console.log(error)
            }
        },
        getAutores: () => {
            try {
                let data = run_axios(rutaMicroBook + '/autores')
                return data.data.autores
            } catch (error) {
                console.log(error)
            }
        },
        getCategoria: () => {
            try {
                let data = run_axios(rutaMicroBook + '/categorias')
                return data.data.categories
            } catch (error) {
                console.log(error)
            }
        },
        getProveedor: () => {
            try {
                let data = run_axios(rutaMicroBook + '/providers')
                return data.data.categories
            } catch (error) {
                console.log(error)
            }
        },
        getCart: (_, {ident}) => {
            try {
                let data = run_axios(rutaMicroUser + '/cart/' + ident +'/')
                const items = run_axios(rutaMicroUser + '/item/' + data.data[0].id_cart + '/')
                let itemsBook = items.data 

                itemsBook = itemsBook.map(async item => {
                    let book = run_axios(rutaMicroBook + '/book/' + item.id_book)
                    item.id_book = book.data.book
                    return item
                })

                data.data[0].items = itemsBook
                return data.data[0]
            } catch (error) {
                console.log(error.message)
            }
        },
        getFavorite: (_, {ident}) => {
            try {
                let data = run_axios(rutaMicroUser+'/favorites/'+ident+'/')
                let book = data.data.map(async favorites => {
                    let book = run_axios(rutaMicroBook + '/book/' + favorites.id_book)
                    return book.data.book
                })
                return book
            } catch (error) {
                console.log(error)
            }
        },
        getPurchased_books: (_, {ident}) => {
            try {
                let data = run_axios(rutaMicroUser+'/purchased/'+ident+'/')
                let book = data.data.map(async purchased => {
                    let book = run_axios(rutaMicroBook + '/book/' + purchased.id_book)
                    return book.data.book
                })
                return book
            } catch (error) {
                console.log(error)
            }
        },
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