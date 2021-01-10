const mongoose = require('mongoose');

const userschema= mongoose.Schema({
  
  imagePath: { type: String, required: true },
});

module.exports=mongoose.model("Registeruser",userschema);