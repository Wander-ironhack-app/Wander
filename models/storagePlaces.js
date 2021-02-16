const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({  
  user : {
    type : Schema.Types.ObjectId,
    ref: 'User'
  }, 
    name: String, 
    coordinates:[Number],  
    });
    
const Place = mongoose.model("Place", placeSchema);
module.exports = Place;