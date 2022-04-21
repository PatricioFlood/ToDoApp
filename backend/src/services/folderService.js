const { Folder, Todo } = require('../models/index.js')

const folderService = {

  createFolder: async (body) => {
    delete body.id
    return await Folder.create(body)
  },

  getFolder: async (id) => {
    return await Folder.findByPk(id, {include: Todo})
  },

  getFolders: async () => {
    return await Folder.findAll()
  },

  removeFolder: async (id) => {
    const folder = await Folder.findByPk(id)
    if(folder)
      await folder.destroy()
  } 
}

module.exports = folderService