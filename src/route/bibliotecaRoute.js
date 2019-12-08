const express = require('express');
const router = express.Router();
const controller = require('../controller/bibliotecaController')

router.get('', controller.getAll)
// router.get('/biblioteca', controller.getAllLibrary)
// router.get('/:id', controller.getBooksById)
// router.post('/cadastrar', controller.addNewBook)


module.exports = router