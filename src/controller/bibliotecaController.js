require('dotenv-safe').load()
const bibliotecaCollection = require('../model/bibliotecaSchema') 
const { connect } = require('../model/database')

connect()

const getAll = (request, response) => {
    bibliotecaCollection.find((error, livros) => {
        if(error){
            return response.status(500).send(error)
        }
        return response.status(200).send(livros)
    })
}

const getAllLibrary = (request, response) => {
            return response.status(200).send(bibliotecaCollection)
        }
        
const getBooksById = (request, response) => {
    const id = request.params.id

    return bibliotecaCollection.findById(id, (error, livro) => {
        if (error) {
            return response.status(500).send(error)
        } if (livro){
            return response.status(200).send(livro)
        }
        return response.status(404).send('Livro não encontrado')
    })
}

const addNewBook = (request, response) => {

    const newBook = new bibliotecaCollection(request.body)

    newBook.save((error) => {
      if (error) {
        return response.status(500).send(error)
      }
  
      return response.status(201).send(newBook)
    })
  }

module.exports = {
    getAll,
    addNewBook,
    getAllLibrary,
    getBooksById
}