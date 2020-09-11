const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectSchema = new Schema({
    address: {type: String, required: true},
    city: {type: String, required: true},
    state:{type: String, required: true},
    zipCode:{type: Number, required: true}
})


const addLocationsSchema = new Schema({
  name: { type: String, required: true },
  description: {type: String, required: true},
  website: { type: String, required: true },
  imageUrl:{type: String, required: true},
  location: {type: objectSchema, required: true},
    indoors:{type: Boolean, required: true },    
    familyFriendly:{type: Boolean, required:true }
  }); 
 
 const TouristDestination = mongoose.model(
  "TouristDestination",
  addLocationsSchema
);

module.exports = TouristDestination;
