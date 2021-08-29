const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')
// const path = require('path')
//helps use an absolute path
const port = 8080

app.use(morgan("dev"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json()) // format of sending data via key: value pairs
app.use(express.static(path.join(__dirname, '/public')))
//use this root folder full of static files every single req and res!
//use path.join to be able to access this folder regardless of the cwd

app.get('/', (req, res) => {
  res.send('Hello Nails!')
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
