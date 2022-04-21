const { DataTypes } = require('sequelize')
const sequelize =  require('../services/sequelize')

const Todo = sequelize.define('todos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  check: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  folderId: {
    type: DataTypes.INTEGER,
  }
}, {
  timestamps: false
})

module.exports = Todo