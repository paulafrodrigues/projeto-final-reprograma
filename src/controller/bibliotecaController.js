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
    getAllLibrary
}