const todoService = require('../services/todoService')

const todoController = {

  create: async (req, res) => {
    const todo = await todoService.createTodo(req.body)
    return res.status(201).json(todo)
  },

  read: async (req, res) => {
    const id = req.params.id
    if(id){
      const todo = await todoService.getTodo(id)
      if(todo)
        return res.json(todo)
      return res.status(404).end()
    }
    const todos = await todoService.getTodos()
    res.json(todos)
  },

  update: async (req, res) => {
    const id = req.params.id
    const todo = await todoService.updateTodo(id, req.body)
    if(todo)
      return res.json(todo)
    return res.status(404).end()
  },
  
  remove: async (req, res) => {
    const id = req.params.id
    await todoService.removeTodo(id)
    return res.status(204).end()
  }
  
}

module.exports = todoController