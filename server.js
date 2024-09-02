require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/user.model.js');
const app = express()
const usersRoutes = require('./routes/users.route.js')

app.use(express.json());
const cors = require('cors');
app.use(cors());
app.use('/users', usersRoutes);

app.get('/', (req, res) => {
  res.send('hello world')
});



mongoose.connect(`mongodb+srv://domikkozlowski26:${process.env.MONGO_DB_PASSWORD}@backenddb.eyxmv.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB`)
.then(() => {
  console.log("Connected to the database");
  app.listen(3000, () => {
    console.log(`Server is running. http://localhost:3000/`)
  });
})
.catch((err) => {
  console.error(err);
});