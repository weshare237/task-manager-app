require('dotenv').config()
const connectDB = require('./db/connect')
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const tasksRouter = require('./routes/tasks')

app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/tasks', tasksRouter)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server listening on port ${port}`))
  } catch (error) {
    console.log(error)
  }
}

start()
