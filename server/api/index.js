const express = require('express')
const app = express();
// const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require('path')
const morgan = require('morgan')
const cookieParser = require('cookie-parser');
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');
const stripeRoute = require("./routes/stripe");
const contactRoute = require("./routes/contact");
const cors = require("cors");
// const path = require('path')
//helps use an absolute path
// const SERVER_CONFIGS = require('./constants/server');
// const configureServer = require('./server');
// const configureRoutes = require('./routes');
// configureServer(app);
// configureRoutes(app);
const port = 8080


dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors())
app.use(morgan("dev"))
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(express.json()) // format of sending data via key: value pairs
app.use(express.static(path.join(__dirname, '/public')))
//use this root folder full of static files every single req and res!
//use path.join to be able to access this folder regardless of the cwd
app.use("/api/users", userRoute);
app.use('/api/auth', authRoute);
app.use('/api/products', productRoute);
app.use('/api/cart', cartRoute);
app.use('/api/orders', orderRoute);
app.use("/api/checkout", stripeRoute);
app.use("/api/contact", contactRoute);

app.get('/', (req, res) => {
  res.send('Hello Nails!')
})

// const contactEmail = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: "***************@gmail.com",
//     pass: "********",
//   },
// });

// contactEmail.verify((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Ready to Send");
//   }
// });
// console.log(process.env.EMAIL)
app.listen(process.env.PORT || port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
