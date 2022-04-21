const { DataTypes } = require('sequelize')
const sequelize =  require('../services/sequelize')

const Folder = sequelize.define('folders', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  }
}, {
  timestamps: false
})

module.exports = Folder