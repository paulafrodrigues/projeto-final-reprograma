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

module.exports = {
    getAll
}