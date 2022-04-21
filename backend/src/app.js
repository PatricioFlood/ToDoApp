const express = require('express')
const cors = require('cors')
require('./services/sequelize')
require('express-async-errors')
const router = require('./routes/index')
const errorHandler = require('./middlewares/errorHandler')

const app = express()

app.use(express.static('./public'))
app.use(cors())
app.use(express.json())
app.use('/api', router)
app.use(errorHandler)

module.exports = app