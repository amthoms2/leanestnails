const express = require('express')
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require('path')
const morgan = require('morgan')
// const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
// const path = require('path')
//helps use an absolute path
const port = 3000

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(morgan("dev"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json()) // format of sending data via key: value pairs
app.use(express.static(path.join(__dirname, '/public')))
//use this root folder full of static files every single req and res!
//use path.join to be able to access this folder regardless of the cwd
app.use('/api/auth', authRoute)

app.get('/', (req, res) => {
  res.send('Hello Nails!')
})


app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening at http://localhost:${port}`)
})

