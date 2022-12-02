const db = require('../models')

const Edition = db.editions

const addEdition = async (req, res) => {

    const id = req.params.id

    let data = {
        livreId: id,
        title: req.body.title,
        description: req.body.description
    }

    const edition = await Edition.create(data)
    res.status(200).send(edition)

}

const getAllEditions = async (req, res) => {

    const editions = await Edition.findAll({})
    res.status(200).send(editions)

}

module.exports = {
    addEdition,
    getAllEditions
}