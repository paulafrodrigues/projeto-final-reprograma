const express = require('express')
const router = express.Router()
const controller = require('../controller/bibliotecaController')

router.get('', controller.getAll)
router.get('/', controller.getAllLibrary)
router.get('/autor/:autorName', controller.getByAutor)
router.get('/genero/:bookGenre', controller.getByGenre)
router.post('/cadastrar', controller.addNewBook)
router.patch('/atualizar/:id', controller.updadeById)
router.delete('/deletar/:id', controller.deleteById)
router.get('/:id', controller.getBooksById)


module.exports = router