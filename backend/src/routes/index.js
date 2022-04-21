const router = require('express').Router()

const todoRouter = require('./todoRouter')
const folderRouter = require('./folderRouter')

router.use('/todos', todoRouter)
router.use('/folders', folderRouter)

module.exports = router