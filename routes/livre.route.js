const livreController = require('../controllers/livre.controller')
const editionController = require('../controllers/edition.controller')

const router = require('express').Router()

router.post('/addBook', livreController.upload , livreController.addBook)

router.get('/allBooks', livreController.getAllBooks)


router.get('/allEditions', editionController.getAllEditions)
router.post('/addEdition/:id', editionController.addEdition)

router.get('/getBookEditions/:id', livreController.getBookEditons)


router.get('/:id', livreController.getOneBook)

router.put('/:id', livreController.updateBook)

router.delete('/:id', livreController.deleteBook)

module.exports = router