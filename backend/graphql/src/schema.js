import { makeExecutableSchema } from '@graphql-tools/schema'
import { resolvers } from "./resolvers";

const typeDefs = `

    type Calificaciones {
        usuario: ID
        calificacion: Int
        comentario: String
        fecha_crecion: String
    }

    type Idiomas {
        idioma: String
        cantidad_stock: Int
    }

    input IdiomasInput {
        idioma: String
        cantidad_stock: Int
    }

    type Formato {
        formato: String
        idiomas: [Idiomas]
    }

    input FormatoInput {
        formato: String
        idiomas: [IdiomasInput]
    }

    type Autor{
        _id: String
        nombre: String
        pseudonimo: String
    }

    input AutorInput{
        _id: String
        nombre: String
        pseudonimo: String
    }

    type Categoria {
        _id: String
        categoria: String
    }

    input CategoriaInput {
        _id: String
        categoria: String
    }

    type Proveedor {
        _id: String
        nombre: String
        telefono: String
        ubicacion: String
        a_mail: String
    }

    input ProveedorInput {
        _id: String
        nombre: String
        telefono: String
        ubicacion: String
        a_mail: String
    }

    type Book {
        _id: String
        codigo: String
        titulo: String
        descripcion: String
        precio: Int
        estado: String
        categoria: [Categoria]
        calificaciones: [Calificaciones]
        formato: [Formato]
        autores: [Autor]
        proveedores: [Proveedor]
        portada: String
        imagenes: [String]
        fecha_publicacion: String
        fecha_actualizacion: String
        fecha_creacion: String
    }

    input BookInput {
        codigo: String
        titulo: String
        descripcion: String
        precio: Int
        estado: String
        categoria: [CategoriaInput]
        formato: [FormatoInput]
        autores: [AutorInput]
        proveedores: [ProveedorInput]
        portada: String
        imagenes: [String]
        fecha_publicacion: String
        fecha_actualizacion: String
    }

    type Query{
        hello: String
        getBooks: [Book]
        getBook(codigo: String!): Book
        getAutores: [Autor]
        getCategoria: [Categoria]
        getProveedor: [Proveedor]
    }

    type Mutation {
        createBook(book: BookInput): String
    }
`;

export const schema = makeExecutableSchema({ typeDefs, resolvers })