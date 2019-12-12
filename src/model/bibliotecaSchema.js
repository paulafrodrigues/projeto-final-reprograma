const mongoose = require('mongoose')
const Schema = mongoose.Schema
const BibliotecaSchema = new Schema({
     
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    nomeLivro: {
        type: String,
        unique: true,
        required: true
    },
    nomeAutor: {
        type: String,
        required: true
    },
    nomeSegundoAutor: {
        type: String
    },
    
    anoPublicacao: {
        type: Number,
        maximum: 2099
    },
    editora: {
        type: String
    },
    serie: {
        type: {String}
    },
    tipoLivro: {
        type: String,
        required: true
    },
    formatoLivro: {
        type: String
    
    },

    situacaoLivro: {
        type: String
    
    }
})

const bibliotecaCollection = mongoose.model('biblioteca', BibliotecaSchema)
module.exports = bibliotecaCollection