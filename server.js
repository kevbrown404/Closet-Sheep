const express = require('express');
const { DATABASE_URL, PORT } = require('./config');
const app = express();

const mongoose = require('mongoose');

app.use(express.static("public"))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const {User} = require('./models/user')
const {Listing} = require('./models/listing')

const usersRouter = require('./routers/usersRouter')
const listingsRouter = require('./routers/listingsRouter')

app.use('/closets', listingsRouter) 
app.use('/users', usersRouter) 
app.get('/*', (req, res) => {
    res.send("Bad Link");
})

//------------------------------------------
mongoose.connect(DATABASE_URL).then(() => {
    app.listen(PORT, () => {
      console.log(`Your app is listening on port ${PORT}`);
    });
  });