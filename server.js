const express = require('express')
const cors = require('cors')

const mongoose = require('mongoose')
require('dotenv').config()

const app = express();
const port = process.env.PORT || 5000

const path = require('path')
app.use(cors())
app.use(express.json())
app.use(express.static('client/build'))


const uri = process.env.ATLAS_URI
mongoose.connect(uri,{useNewUrlParser: true, useCreateIndex: true})

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log('mongoDB database connected')
})

const TouristDestination = require('./routes/addLocations')
const Contact = require('./routes/contacts')

app.use('/all-locations', TouristDestination)
app.use('/contacts', Contact)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')) // relative path
    })
  }
app.listen(port, ()=>{
    console.log(`server is running on port: ${port}`)
})

