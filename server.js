// const requirejs = require('requirejs');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
var bodyParser = require('body-parser')
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.static('client/build'));

const uri = process.env.ATLAS_URI
mongoose.connect( uri, {useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('mongodb database connection established succesfully')
})

// const mongoose = require('mongoose');
const TouristDestination = require("./models/addLocations.models");
const Contact = require("./models/contacts.models");

var jsonParser = bodyParser.json
var urlencodedParser = bodyParser.urlencoded({ extended: false })








// const uri = process.env.ATLAS_URI;
// mongoose
//     .connect("mongodb+srv://capstone:12345@cluster0.gdfnt.mongodb.net/Cluster0?retryWrites=true&w=majority", { useNewUrlParser: true, useCreateIndex: true })
    
// const connection = mongoose.connection;
// console.log('in the name of all that is holy, I beg of thee')
// mongoose.connection.on('open', () => {  console.log("MongoDB database connection established successfully");})
// mongoose.connection.on('error', (err) => {  console.log(err);})

// const addLocationsRouter = require('./models/addLocations.models');
// const contactsRouter = require('./models/contacts.models');

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/client/build/index.html', function (err) {
      if (err) {
        res.status(500).send(err);
      }
    });
  });

app.use('/all-locations', TouristDestination);
app.use('/contacts', Contact);
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});



  