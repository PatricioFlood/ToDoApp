const Todo = require('./Todo')
const Folder = require('./Folder')

Folder.hasMany(Todo)
Todo.belongsTo(Folder)

module.exports = {
  Todo,
  Folder
}