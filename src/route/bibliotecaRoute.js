const express = require('express');
const router = express.Router();
const controller = require('../controller/bibliotecaController')

router.get('', controller.getAll)
router.get('/', controller.getAllLibrary)
router.post('/cadastrar', controller.addNewBook)
router.get('/:id', controller.getBooksById)


module.exports = router