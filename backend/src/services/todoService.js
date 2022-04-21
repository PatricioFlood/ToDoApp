const { Todo } = require('../models/index.js')

const todoService = {

  createTodo: async (body) => {
    delete body.id
    return await Todo.create(body)
  },

  getTodo: async (id) => {
    return await Todo.findByPk(id)
  },

  getTodos: async () => {
    return await Todo.findAll()
  },

  updateTodo: async (id, body) => {
    const todo = await Todo.findByPk(id)
    todo.name = body.name || todo.name
    todo.check = body.check || todo.check
    return await todo.save()
  },

  removeTodo: async (id) => {
    const todo = await Todo.findByPk(id)
    if(todo)
      await todo.destroy()
  } 
}

module.exports = todoService