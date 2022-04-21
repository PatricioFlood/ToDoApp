const todoRouter = require('express').Router()
const todoController = require('../controllers/todoController')

todoRouter.post('/', todoController.create)
todoRouter.get('/(:id)?', todoController.read)
todoRouter.put('/:id', todoController.update)
todoRouter.delete('/:id', todoController.remove)

module.exports = todoRouter