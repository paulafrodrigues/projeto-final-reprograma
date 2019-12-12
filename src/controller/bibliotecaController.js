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

// const getAutorByName = (request, response) => {
//     const autorName = request.params.autorName

//     return bibliotecaCollection.find(bibliotecaCollection => bibliotecaCollection.nomeAutor === autorName)
// }

const addNewBook = (request, response) => {

    const newBook = new bibliotecaCollection(request.body)

    newBook.save((error) => {
      if (error) {
        return response.status(500).send(error)
      }
  
      return response.status(201).send(newBook)
    })
  }

  const updadeById = (request, response) => {
      const id = request.params.id
      const bookUpdate = request.body
      const options = { new: true}

      bibliotecaCollection.findByIdAndUpdate(
          id,
          bookUpdate,
          options,
          (error, livro) => {
              if (error) {
                  return response.status(500).send(error)
              }

              if (livro) {
                  return response.status(200).send(livro)
              }

              return response.status(404).send('Livro não encontrado!')
          }
      )
  }

  const deleteById = (request, response) => {
      const id = request.params.id

      bibliotecaCollection.findByIdAndDelete(id, (error, livro) => {
          if (error) {
              return response.status(500).send(error)
          }

          if (livro) {
              return response.status(200).send('Cadastro deletado!')
          }

          return response.status(404).send('Livro não encontrado!')
      })
  }

module.exports = {
    getAll,
    addNewBook,
    //getAutorByName,
    getAllLibrary,
    updadeById,
    getBooksById,
    deleteById
    
}