const folderService = require('../services/folderService')

const folderController = {

  create: async (req, res) => {
    const folder = await folderService.createFolder(req.body)
    return res.status(201).json(folder)
  },

  read: async (req, res) => {
    const id = req.params.id
    if(id){
      const folder = await folderService.getFolder(id)
      if(folder)
        return res.json(folder)
      return res.status(404).end()
    }
    const folders = await folderService.getFolders()
    res.json(folders)
  },
  
  remove: async (req, res) => {
    const id = req.params.id
    await folderService.removeFolder(id)
    return res.status(204).end()
  }
  
}

module.exports = folderController