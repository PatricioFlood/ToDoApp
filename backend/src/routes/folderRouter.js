const folderRouter = require('express').Router()
const folderController = require('../controllers/folderController')

folderRouter.post('/', folderController.create)
folderRouter.get('/(:id)?', folderController.read)
folderRouter.delete('/:id', folderController.remove)

module.exports = folderRouter