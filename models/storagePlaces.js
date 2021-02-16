const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const placeSchema = new Schema(
  {  name: String, 
     coordinate: [],  
    });
    
const Place = mongoose.model("Place", placeSchema);
module.exports = Place;