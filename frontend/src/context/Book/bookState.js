import React, {useReducer} from 'react'
import axios from 'axios'
import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider, gql, useQuery } from '@apollo/client';

import BookContext from './bookContext'
import BookReducer from './bookReducer'

const BookState = (props) => {

    const ruta = 'http://localhost:4000';

    const client = new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
          uri: 'http://localhost:5000/graphql',
    
        })
      })

    const inicialState = {
        books: null,
        book: {},
        favoriteBooks: null,
        purchasedBooks: null
    }

    const [state, dispatch] = useReducer(BookReducer, inicialState)

    const getBooks = async () => {
        try {
            const query = gql`
                    query{
                        getBooks {
                        _id
                        codigo
                        titulo
                        descripcion
                        precio
                        estado
                        portada
                        autores {
                          _id
                          nombre
                          pseudonimo
                        }
                        calificaciones {
                          calificacion
                          comentario
                          fecha_crecion
                        }
                fecha_publicacion
                fecha_actualizacion
                fecha_creacion
              }
            }
            `
            let data = await client.query({ query }) 
            console.log(data.data.getBooks)
            dispatch({
                type: 'OBTENER_BOOKS',
                payload: data.data.getBooks
            })

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <BookContext.Provider value={{
            books: state.books,
            book: state.book,
            getBooks
        }}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookState