const db = require('../models')

const multer = require('multer')
const path = require('path')

const Livre = db.livres
const Edition = db.editions

const addBook = async (req, res) => {

    let info = {
        image: req.file.path,
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        genre: req.body.genre,
        quantite: req.body.quantite
    }

    const livre = await Livre.create(info)
    res.status(200).send(livre)
    console.log(livre)

}



const getAllBooks = async (req, res) => {

    let livres = await Livre.findAll({})
    res.status(200).send(livres)

}

const getOneBook = async (req, res) => {

    let id = req.params.id
    let livre = await Livre.findOne({ where: { id: id }})
    res.status(200).send(livre)

}

const updateBook = async (req, res) => {

    let id = req.params.id

    const livre = await Livre.update(req.body, { where: { id: id }})

    res.status(200).send(livre)
   

}

const deleteBook = async (req, res) => {

    let id = req.params.id
    
    await Livre.destroy({ where: { id: id }} )

    res.status(200).send('Le livre est supprimé')

}

const getBookEditons =  async (req, res) => {

    const id = req.params.id

    const data = await Livre.findOne({
        include: [{
            model: Edition,
            as: 'edition'
        }],
        where: { id: id }
    })

    res.status(200).send(data)

}


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('format invalide')
    }
}).single('image')









module.exports = {
    addBook,
    getAllBooks,
    getOneBook,
    updateBook,
    deleteBook,
    getBookEditons,
    upload
    
}