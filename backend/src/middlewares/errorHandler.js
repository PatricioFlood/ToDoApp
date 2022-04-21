const errorHandler = (error, _request, res, _next) => {
  switch(error.name){
    case 'SequelizeValidationError': {
      const errorMessage = error.message.split(': ')
  
      if(errorMessage[0] && errorMessage[0] === 'notNull Violation')
        error = `${error.errors[0].path} is required`
      else
        error = errorMessage[1] || error.message
  
      return res.status(400).json({ error })
    }
  
    case 'SequelizeUniqueConstraintError':
      return res.status(400).json({
        error: `${error.original.constraint} already exists`,
      })
  
    case 'SequelizeForeignKeyConstraintError':
      return res.status(400).json({
        error: `${error.original.constraint} ID not exists`,
      })
  
    case 'SequelizeDatabaseError':
      return res.status(400).json({
        error: 'malformed field'
      })
  
    case 'SyntaxError':
      if(error.status === 400 && 'body' in error)
        return res.status(400).json({ error: 'malformed body' })
      /* falls through */
  
    default:
      console.error(error)
      return res.sendStatus(500)
    }
}

module.exports = errorHandler